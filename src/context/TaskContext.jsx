import { createContext, useState, useEffect } from 'react'
import { StorageService } from '../services/storage'

export const TaskContext = createContext()

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(() => StorageService.get('tasks') || [])
  useEffect(() => StorageService.set('tasks', tasks), [tasks])

  const createTask = (name, listId, dueDate) => {
    const newTask = {
      name,
      id: crypto.randomUUID(),
      creationDate: Date.now(),
      dueDate,
      isDone: false,
      listId,
    }
    setTasks(prev => [...prev, newTask])
    console.log('New task created')
    console.log(newTask)
  }

  const deleteTask = id => {
    console.log('Task deleted')
    console.log(getTaskById(id))
    setTasks(prev => prev.filter(task => task.id !== id))
    return id
  }

  const renameTask = (id, newName) => {
    setTasks(prev =>
      prev.map(task => (task.id === id ? { ...task, name: newName } : task)),
    )
    return { id, newName }
  }

  const checkTask = id => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, isDone: !task.isDone } : task,
      ),
    )
    return id
  }

  // Selectors
  const getTasksByListId = listId => {
    return tasks.filter(task => task.listId === listId)
  }

  const getTaskById = id => {
    return tasks.filter(task => task.id === id)
  }

  const getCompletedTasks = () => {
    return tasks.filter(task => task.isDone)
  }

  const value = {
    tasks,
    createTask,
    deleteTask,
    renameTask,
    checkTask,
    getTasksByListId,
    getCompletedTasks,
    getTaskById,
  }

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>
}
