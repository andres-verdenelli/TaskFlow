import { useTaskState } from './useTaskState'

export function useTaskSelectors() {
  const { tasks } = useTaskState()
  const getTasksByListId = listId => {
    return tasks.filter(task => task.listId === listId)
  }

  const getCompletedTasks = () => {
    return tasks.filter(task => task.isDone)
  }

  return { getTasksByListId, getCompletedTasks }
}
