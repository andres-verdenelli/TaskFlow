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
    return getList(id)?.name || null
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
   * Returns all tasks belonging to a specific list.
   * @param {string} listId - The ID of the list.
   * @returns {Array} An array of task objects belonging to the specified list.
   */
  const getTasks = listId => getList(listId)?.tasks || null

  /**
   * Returns the completion status of a task by its ID.
   * @param {string} id - The ID of the task.
   * @returns {boolean|undefined} True if completed, false if not, or undefined if task not found.
   */
  const isTaskCompleted = id => getTask(id)?.isCompleted || []

  /**
   * Updates properties of a task by its ID.
   * Used internally by other task-related operations (e.g., rename, toggle completion).
   *
   * @param {string} id - The ID of the task to update.
   * @param {Object} update - An object containing the properties to update.
   */
  const updateTask = (id, update) => {
    setLists(prev =>
      prev.map(list => ({
        ...list,
        tasks: list.tasks.map(task =>
          task.id === id ? { ...task, ...update } : task,
        ),
      })),
    )
  }

  /**
   * Renames a task by its ID
   * @param {string} newName - The new name for a task
   * @param {string} id - The ID of the task
   */
  const renameTask = (id, name) => {
    updateTask(id, { name })
    // setLists(prev =>
    //   prev.map(list => ({
    //     ...list,
    //     tasks: list.tasks.map(task =>
    //       task.id === id ? { ...task, name: newName } : task,
    //     ),
    //   })),
    // )
  }

  /**
   * Toggles the completion status of a task.
   * If the task is completed, it will be marked as incomplete and vice versa.
   * @param {string} id - The ID of the task.
   */
  const toggleTaskCompletion = id => {
    const isCompleted = isTaskCompleted(id)
    updateTask(id, { isCompleted: !isCompleted })
  }

  /**
   * Sets the completion status of a task.
   * @param {string} id - The ID of the task.
   * @param {boolean} isCompleted - The desired completion status.
   */
  const setTaskCompletion = (id, isCompleted) =>
    updateTask(id, { isCompleted: isCompleted })

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
    toggleTaskCompletion,
    setTaskCompletion,
    isTaskCompleted,
    getTasks,
  }

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}
