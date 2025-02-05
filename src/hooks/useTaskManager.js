import { useState, useEffect } from 'react'

export default function useTaskManager() {
  const [tasks, setTasks] = useState(() => {
    const tasksLocalStorage = localStorage.getItem('tasks')
    return tasksLocalStorage ? JSON.parse(tasksLocalStorage) : []
  })
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const createTask = (name, listId) => {
    const newTask = {
      name: name,
      id: crypto.randomUUID(),
      creationDate: Date.now(),
      isDone: false,
      listId: listId,
    }
    setTasks(prev => [...prev, newTask])
    return newTask
  }

  const deleteTask = id => {
    setTasks(prev => prev.filter(task => task.id !== id))
    return id
  }

  const renameTask = (id, newName) => {
    setTasks(prev =>
      prev.map(task => (task.id === id ? { ...task, name: newName } : task))
    )
    return { id, newName }
  }

  const checkTask = id => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    )
    return id
  }

  const getTasksByList = listId => {
    return tasks.filter(task => task.listId === listId)
  }

  const getCompletedTasks = () => {
    return tasks.filter(task => task.isDone)
  }

  //CRUD create, read, update, delete
  return {
    createTask,
    deleteTask,
    renameTask,
    checkTask,
    tasks,
    getTasksByList,
    getCompletedTasks,
  }
}
