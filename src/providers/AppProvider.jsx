import { TodoProvider } from '../context/TodoContext'
import { ViewProvider } from '../context/ViewContext'

export function AppProvider({ children }) {
  return (
    <TodoProvider>
      <ViewProvider>{children}</ViewProvider>
    </TodoProvider>
  )
}
