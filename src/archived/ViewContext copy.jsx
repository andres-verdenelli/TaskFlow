import { createContext, useEffect, useState } from 'react'
import { VIEW_TYPES } from '../constants/viewTypes'
import { useTasks } from './useTasks'
import { useLists } from './useLists'

export const ViewContext = createContext()

export function ViewProvider({ children }) {
  const { getListById } = useLists()
  const { getCompletedTasks, getTasksByListId, tasks } = useTasks()

  const [currentView, setCurrentView] = useState({
    type: VIEW_TYPES.ALL,
    listId: null,
  })
  const [visibleTasks, setVisibleTasks] = useState(tasks)

  const getCurrentViewName = () => {
    if (currentView.type === VIEW_TYPES.LIST) {
      const listId = currentView.listId
      const list = getListById(listId)
      if (!list) {
        setCurrentView({ type: VIEW_TYPES.ALL, listId: null })
        return 'All'
      }
      return list.name
    } else {
      return (
        currentView.type.charAt(0).toUpperCase() + currentView.type.slice(1)
      )
    }
  }

  useEffect(() => {
    switch (currentView.type) {
      case VIEW_TYPES.ALL:
        setVisibleTasks(tasks)
        break
      case VIEW_TYPES.TODAY:
        setVisibleTasks(tasks) //TODO: implement today logic
        break
      case VIEW_TYPES.DONE:
        setVisibleTasks(getCompletedTasks())
        break
      case VIEW_TYPES.SCHEDULE:
        setVisibleTasks(tasks) //TODO: implement schedule logic
        break
      case VIEW_TYPES.LIST:
        setVisibleTasks(getTasksByListId(currentView.listId))
        break
      default:
        setVisibleTasks(tasks)
    }
  }, [currentView, tasks, getCompletedTasks, getTasksByListId])

  return (
    <ViewContext.Provider
      value={{ currentView, setCurrentView, visibleTasks, getCurrentViewName }}
    >
      {children}
    </ViewContext.Provider>
  )
}
