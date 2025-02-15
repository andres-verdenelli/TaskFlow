import { createContext, useEffect, useState } from 'react'
import { VIEW_TYPES } from '../constants/viewTypes'
import { useTasks } from '../hooks/useTasks'

export const ViewContext = createContext()

export function ViewProvider({ children }) {
  const [currentView, setCurrentView] = useState({
    type: VIEW_TYPES.ALL,
    listId: null,
  })
  const { getCompletedTasks, getTasksByListId, tasks } = useTasks()
  const [visibleTasks, setVisibleTasks] = useState(tasks)

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
    <ViewContext.Provider value={{ currentView, setCurrentView, visibleTasks }}>
      {children}
    </ViewContext.Provider>
  )
}
