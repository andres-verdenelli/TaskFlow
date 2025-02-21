import { createContext, useState, useEffect } from 'react'
import { StorageService } from '../services/storage'

export const ListContext = createContext()

export function ListProvider({ children }) {
  const [lists, setLists] = useState(() => StorageService.get('lists') || [])

  useEffect(() => {
    StorageService.set('lists', lists)
  }, [lists])

  // Actions
  const createList = (name, color) => {
    const newList = {
      name,
      color,
      id: crypto.randomUUID(),
    }
    setLists(prev => [...prev, newList])
    return newList
  }

  const deleteList = id => {
    setLists(prev => prev.filter(list => list.id !== id))
  }

  const updateList = (id, updates) => {
    setLists(prev =>
      prev.map(list => (list.id === id ? { ...list, ...updates } : list))
    )
  }

  // Selectors

  const getListById = id => {
    return lists.find(list => list.id === id)
  }

  const value = {
    lists,
    createList,
    deleteList,
    updateList,
    getListById,
  }

  return <ListContext.Provider value={value}>{children}</ListContext.Provider>
}
