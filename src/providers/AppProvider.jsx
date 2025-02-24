import { ListProvider } from '../context/ListContext'
import { TaskProvider } from '../context/TaskContext'
import { ViewProvider } from '../context/ViewContext'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

export function AppProvider({ children }) {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ListProvider>
          <TaskProvider>
            <ViewProvider>{children}</ViewProvider>
          </TaskProvider>
        </ListProvider>
      </LocalizationProvider>
    </>
  )
}
