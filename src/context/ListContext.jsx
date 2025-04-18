import { createContext, useState, useEffect } from 'react'
import { StorageService } from '../services/storage'

export const ListContext = createContext()

export function ListProvider({ children }) {
  const [lists, setLists] = useState(() => StorageService.get('lists') || [])

  useEffect(() => {
    StorageService.set('lists', lists)
  }, [lists])

  // Actions
  const createList = (name, color = null) => {
    const newList = {
      name,
      color,
      id: crypto.randomUUID(),
    }
    setLists(prev => [...prev, newList])
    console.log('List Created')
    console.log(newList)
  }

  const deleteList = id => {
    console.log('List deleted')
    console.log(getListById(id))
    setLists(prev => prev.filter(list => list.id !== id))
  }

  const updateList = (id, updates) => {
    setLists(prev =>
      prev.map(list => (list.id === id ? { ...list, ...updates } : list)),
    )
  }

  // Selectors

  const getListById = id => {
    return lists.find(list => list.id === id)
  }

  const getListNameById = id => {
    const list = getListById(id)
    return list ? list.name : null
  }

  const value = {
    lists,
    createList,
    deleteList,
    updateList,
    getListById,
    getListNameById,
  }

  return <ListContext.Provider value={value}>{children}</ListContext.Provider>
}
