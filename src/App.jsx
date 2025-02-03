import './App.css'
import Sidebar from './components/Sidebar'
import Task from './components/Task'
import { useState, useEffect } from 'react'
import List from '@mui/material/List'
import Header from './components/Header'
import { Box } from '@mui/material'

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const tasksLocalStorage = localStorage.getItem('tasks')
    return tasksLocalStorage ? JSON.parse(tasksLocalStorage) : []
  })
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const createTask = name => {
    return {
      name: name,
      id: crypto.randomUUID(),
      creationDate: Date.now(),
      isDone: false,
    }
  }
  const addTask = newTask => {
    setTasks([...tasks, newTask])
  }

  const deleteTask = id => {
    const newTasks = tasks.filter(task => task.id !== id)
    setTasks(newTasks)
  }

  const renameTask = (id, newName) => {
    const newTasks = tasks.map(task =>
      task.id === id ? { ...task, name: newName } : task
    )
    setTasks(newTasks)
  }

  const checkTask = id => {
    const newTasks = tasks.map(task =>
      task.id === id ? { ...task, isDone: !task.isDone } : task
    )
    setTasks(newTasks)
  }

  const handleCreateTask = () => {
    const userInput = prompt('Please enter Task name: ')
    const newTask = createTask(userInput)
    addTask(newTask)
  }

  return (
    <>
      <Box
        display={'flex'}
        flexDirection={'column'}
        height={'100vh'}
      >
        <Header handleCreateTask={handleCreateTask} />
        <Box
          display={'flex'}
          flexGrow={1}
        >
          <Sidebar />
          <Box flexGrow={1}>
            <List>
              {tasks.map(task => (
                <Task
                  task={task}
                  key={task.id}
                  deleteTask={deleteTask}
                  renameTask={renameTask}
                  checkTask={checkTask}
                />
              ))}
            </List>
          </Box>
        </Box>
      </Box>
    </>
  )
}
