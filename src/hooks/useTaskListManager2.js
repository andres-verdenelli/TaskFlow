import { useState, useEffect } from 'react'
import { StorageService } from '../services/storage'

export default function useTaskListManager() {
  const [lists, setLists] = useState(() => StorageService.get('lists') || [])
  useEffect(() => StorageService.set('lists', lists), [lists])

  const createList = name => {
    const newList = { name: name, id: crypto.randomUUID() } //implementar color
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

  const getListNameById = id => {
    const list = lists.find(list => list.id === id)
    return list ? list.name : null
  }
  return { createList, deleteList, updateList, lists, getListNameById }
}
