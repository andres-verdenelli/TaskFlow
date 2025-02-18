import { createContext, useContext, useState, useEffect } from 'react'
import { StorageService } from '../services/storage'

// Creamos el contexto
export const ListContext = createContext()

// Creamos el Provider
export function ListProvider({ children }) {
  // Estado centralizado de listas
  const [lists, setLists] = useState(() => StorageService.get('lists') || [])

  // Persistencia en localStorage
  useEffect(() => {
    StorageService.set('lists', lists)
  }, [lists])

  // Acciones
  const createList = name => {
    const newList = {
      name: name,
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

  // Selectores
  const getListNameById = id => {
    const list = lists.find(list => list.id === id)
    return list ? list.name : null
  }

  const getListById = id => {
    return lists.find(list => list.id === id)
  }

  // Valor del contexto
  const value = {
    lists,
    createList,
    deleteList,
    updateList,
    getListNameById,
    getListById,
  }

  return <ListContext.Provider value={value}>{children}</ListContext.Provider>
}
