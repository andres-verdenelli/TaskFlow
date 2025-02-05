import { useState, useEffect } from 'react'

export default function useTaskListManager() {
  const [lists, setLists] = useState(() => {
    const listsLocalStorage = localStorage.getItem('lists')
    return listsLocalStorage ? JSON.parse(listsLocalStorage) : []
  })
  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(lists))
  }, [lists])

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
  return { createList, deleteList, updateList, lists }
}
