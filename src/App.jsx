import Task from './components/Task'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [taskList, setTaskList] = useState(() => {
    const storedTasks = localStorage.getItem('taskList')
    return storedTasks ? JSON.parse(storedTasks) : []
  })

  useEffect(() => {
    localStorage.setItem('taskList', JSON.stringify(taskList))
  }, [taskList])

  const createTask = () => {
    const task = {
      text: '',
      isChecked: false,
      date: Date.now(),
    }
    setTaskList([...taskList, task])
  }

  const updateTask = updatedTask => {
    setTaskList(
      taskList.map(task =>
        task.date === updatedTask.date ? updatedTask : task
      )
    )
  }

  return (
    <>
      <h1>To do List</h1>
      <h3>Personal</h3>
      <button onClick={createTask}>Create a task</button>
      <ul>
        {taskList.map(task => (
          <Task
            text={task.text}
            isChecked={task.isChecked}
            key={task.date}
            date={task.date}
            updateTask={updateTask}
          />
        ))}
      </ul>
    </>
  )
}

export default App
