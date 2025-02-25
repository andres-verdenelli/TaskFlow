import { ListProvider } from '../context/ListContext'
import { TaskProvider } from '../context/TaskContext'
import { ThemeContext } from '../context/ThemeContext'
import { ViewProvider } from '../context/ViewContext'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

export function AppProvider({ children }) {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ThemeContext>
          <ListProvider>
            <TaskProvider>
              <ViewProvider>{children}</ViewProvider>
            </TaskProvider>
          </ListProvider>
        </ThemeContext>
      </LocalizationProvider>
    </>
  )
}
