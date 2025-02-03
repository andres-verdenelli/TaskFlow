import './App.css'
import Sidebar from './components/Sidebar'
import Task from './components/Task'
import styles from './styles/App.module.css'
import { useState, useEffect } from 'react'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'
import List from '@mui/material/List'
import Header from './components/Header'

function App() {
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

  const deleteTask = newTask => {
    const newTasks = tasks.filter(task => {
      return task.id !== newTask.id
    })
    setTasks(newTasks)
  }

  const handleCreateTask = () => {
    const userInput = prompt('Please enter Task name: ')
    const newTask = createTask(userInput)
    addTask(newTask)
  }

  return (
    <>
      <Header />
      <div className={styles.contentContainer}>
        {/* <div className={styles.sideBarContainer}>
          <Sidebar />
        </div> */}
        <div className={styles.mainContentContainer}>
          <Button
            variant='outlined'
            size='small'
            onClick={handleCreateTask}
            endIcon={<AddIcon />}
          >
            create task
          </Button>
          <List>
            {tasks.map(task => (
              <Task
                task={task}
                key={task.id}
                deleteTask={deleteTask}
              />
            ))}
          </List>
        </div>
      </div>
    </>
  )
}

export default App
