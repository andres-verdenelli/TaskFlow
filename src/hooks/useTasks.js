import { useTaskActions } from './useTaskActions'
import { useTaskSelectors } from './useTaskSelectors'

export function useTasks() {
  const actions = useTaskActions()
  const selectors = useTaskSelectors()

  return { ...actions, ...selectors }
}
