import { createContext, useEffect, useState } from 'react'
import { StorageService } from '../services/storage'

export const TodoContext = createContext(null)

export function TodoProvider({ children }) {
  const [lists, setLists] = useState(() => StorageService.get('lists') || [])

  useEffect(() => {
    StorageService.set('lists', lists)
  }, [lists])
  /**
   * Creates a new list
   * @param {string} name - The name for the new list
   */
  const createList = name => {
    const newList = {
      name,
      id: crypto.randomUUID(),
      tasks: [],
    }
    setLists(prev => [...prev, newList])
  }
  /**
   * Returns a list object by its ID
   * @param {string} id - The ID for the list
   * @returns {Object | null} - Return a object list or null if not found
   */
  const getList = id => lists.find(list => list.id === id)
  /**
   * Returns the name of a list by its ID
   * @param {string} id - The ID of the list
   * @returns {string | null } - Return the list name or null if not found
   */
  const getListName = id => {
    return lists.find(list => list.id === id)?.name || null
  }
  /**
   * Renames a list by its ID
   * @param {string} id - The ID of the list
   * @param {string} newName - The new name for the list
   */
  const renameList = (id, newName) => {
    setLists(prev =>
      prev.map(list => (list.id === id ? { ...list, name: newName } : list)),
    )
  }
  /**
   * Deletes a list by its ID
   * @param {string} id - The ID of the list to delete
   */
  const deleteList = id => {
    setLists(prev => prev.filter(list => list.id !== id))
  }
  /**
   * Creates a new task inside a list
   * @param {string} name - The name for the task
   * @param {string} listId - The ID of the list to add the task
   */
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
   * Returns a task by its ID
   * @param {string} id - The ID of the task.
   * @returns {Object | null} The found task, or null if not found.
   */
  const getTask = id => {
    const allTasks = getAllTasks()
    return allTasks.find(task => task.id == id) || null
  }

  /**
   * Renames a task by its ID
   * @param {string} newName - The new name for a task
   * @param {string} id - The ID of the task
   */
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
  /**
   * Deletes a task by its ID
   * @param {string} id - The ID of the task to delete
   */
  const deleteTask = id => {
    setLists(prev =>
      prev.map(list => ({
        ...list,
        tasks: list.tasks.filter(task => task.id !== id),
      })),
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
    renameTask,
  }

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}
