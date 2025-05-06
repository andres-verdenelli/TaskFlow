import { createContext, useEffect, useState } from 'react'
import { VIEW_TYPES } from '../constants/viewTypes'
import { useTodo } from '../hooks/useTodo'

export const ViewContext = createContext()

export function ViewProvider({ children }) {
  const { getAllTasks, getAllCompletedTasks, getTasks, getListName, lists } =
    useTodo()

  const [currentView, setCurrentView] = useState({
    type: VIEW_TYPES.ALL,
    listId: null,
  })

  useEffect(() => {
    if (
      currentView.type === VIEW_TYPES.LIST &&
      !lists.some(list => list.id === currentView.listId)
    ) {
      setCurrentView({
        type: VIEW_TYPES.ALL,
        listId: null,
      })
    }
  }, [lists, currentView])

  //TODO falta today y schedule
  const getVisibleTasks = () => {
    switch (currentView.type) {
      case VIEW_TYPES.ALL:
        return getAllTasks()
      case VIEW_TYPES.DONE:
        return getAllCompletedTasks()
      case VIEW_TYPES.LIST:
        return getTasks(currentView.listId) || []
    }
  }

  const getCurrentViewName = () => {
    if (currentView.type === VIEW_TYPES.LIST) {
      return getListName(currentView.listId)
    } else {
      return (
        currentView.type.charAt(0).toUpperCase() + currentView.type.slice(1)
      )
    }
  }

  return (
    <ViewContext.Provider
      value={{
        currentView,
        setCurrentView,
        getVisibleTasks,
        getCurrentViewName,
      }}
    >
      {children}
    </ViewContext.Provider>
  )
}
