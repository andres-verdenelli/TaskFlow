import { ListProvider } from '../context/ListContext'
import { TaskProvider } from '../context/TaskContext'
import { ViewProvider } from '../context/ViewContext'

export function AppProvider({ children }) {
  return (
    <ListProvider>
      <TaskProvider>
        <ViewProvider>{children}</ViewProvider>
      </TaskProvider>
    </ListProvider>
  )
}
