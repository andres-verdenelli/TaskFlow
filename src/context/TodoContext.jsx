import { createContext, useEffect, useState } from 'react'
import { StorageService } from '../services/storage'

export const TodoContext = createContext(null)

export function TodoProvider({ children }) {
  const [lists, setLists] = useState(() => StorageService.get('lists') || [])

  useEffect(() => {
    StorageService.set('lists', lists)
  }, [lists])

  const createList = name => {
    const newList = {
      name,
      id: crypto.randomUUID(),
      tasks: [],
    }
    setLists(prev => [...prev, newList])
  }

  const getList = id => lists.find(list => list.id === id)

  const getListName = id => {
    const filterList = lists.find(list => list.id === id)
    return filterList ? filterList.name : null
  }

  const renameList = (id, newName) => {
    setLists(prev =>
      prev.map(list => (list.id === id ? { ...list, name: newName } : list)),
    )
  }

  const deleteList = id => {
    setLists(prev => prev.filter(list => list.id !== id))
  }

  const createTask = (name, listId) => {
    const newTask = {
      name,
      id: crypto.randomUUID(),
      isCompleted: false,
      creationDate: Date.now(),
    }
    setLists(prev =>
      prev.map(list =>
        list.id === listId ?
          { ...list, tasks: [...list.tasks, newTask] }
        : list,
      ),
    )
  }
  /**
   * Returns all tasks from all lists.
   * @returns {Array} An array containing all tasks.
   */
  const getAllTasks = () => {
    return lists.reduce((acc, list) => [...acc, ...list.tasks], [])
  }
  /**
   * Returns a task based on its ID.
   * @param {string} id - The ID of the task.
   * @returns {Object | null} The found task, or null if not found.
   */
  const getTask = id => {
    const allTasks = getAllTasks()
    return allTasks.find(task => task.id == id) || null
  }

  const renameTask = (newName, id) => {
    setLists(prev =>
      prev.map(list => ({
        ...list,
        tasks: list.tasks.map(task =>
          task.id === id ? { ...task, name: newName } : task,
        ),
      })),
    )
  }

  //grave error
  const deleteTask = id => {
    setLists(prev =>
      prev.map(list => list.tasks.filter(task => task.id !== id)),
    )
  }

  const value = {
    lists,
    createList,
    deleteList,
    renameList,
    getList,
    getListName,
    createTask,
    deleteTask,
    getTask,
    getAllTasks,
  }

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}
