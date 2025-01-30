import Task from './Task'
import { useEffect, useState } from 'react'

export default function TaskList({ name, id, deleteList }) {
  const storageName = `tasklist${id}`
  const [taskList, setTaskList] = useState(() => {
    const storedTasks = localStorage.getItem(storageName)
    return storedTasks ? JSON.parse(storedTasks) : []
  })

  useEffect(() => {
    localStorage.setItem(storageName, JSON.stringify(taskList))
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

  const deleteTask = deletedTask => {
    setTaskList(taskList.filter(task => task.date !== deletedTask.date))
  }
  return (
    <>
      <span>{name}</span>
      <button onClick={createTask}>Create a task</button>
      <button onClick={() => deleteList(id)}>Delete List</button>
      <ul>
        {taskList.map(task => (
          <Task
            text={task.text}
            isChecked={task.isChecked}
            key={task.date}
            date={task.date}
            updateTask={updateTask}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </>
  )
}
