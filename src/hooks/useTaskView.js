import { useState } from 'react'
import { VIEW_TYPES } from '../constants/viewTypes'

export default function useTaskView({
  tasks,
  getCompletedTasks,
  getTasksByList,
}) {
  const [currentView, setCurrentView] = useState({ type: VIEW_TYPES.ALL })

  const getVisibleTasks = () => {
    switch (currentView.type) {
      case VIEW_TYPES.ALL:
        return tasks
      case VIEW_TYPES.TODAY:
        return tasks //falta implementar logica de today
      case VIEW_TYPES.DONE:
        return getCompletedTasks()
      case VIEW_TYPES.SCHEDULE:
        return tasks //falta implementar logica
      case VIEW_TYPES.LIST:
        return getTasksByList(currentView.listId)
    }
  }
  return { currentView, setCurrentView, getVisibleTasks }
}
