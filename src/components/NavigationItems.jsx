import { GridView } from '@mui/icons-material'
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { VIEW_TYPES } from '../constants/viewTypes'
import { Today, Schedule, TaskAlt } from '@mui/icons-material'
import { useTaskView } from '../hooks/useTaskView'

export default function NavigationItems() {
  const { currentView, setCurrentView } = useTaskView()
  return (
    <>
      <ListItemButton
        selected={currentView.type === VIEW_TYPES.ALL}
        onClick={() => {
          setCurrentView({ type: VIEW_TYPES.ALL })
        }}
      >
        <ListItemIcon>
          <GridView />
        </ListItemIcon>
        <ListItemText>All</ListItemText>
      </ListItemButton>
      <ListItemButton
        selected={currentView.type === VIEW_TYPES.TODAY}
        onClick={() => setCurrentView({ type: VIEW_TYPES.TODAY })}
      >
        <ListItemIcon>
          <Today />
        </ListItemIcon>
        <ListItemText>Today</ListItemText>
      </ListItemButton>
      <ListItemButton
        selected={currentView.type === VIEW_TYPES.SCHEDULE}
        onClick={() => setCurrentView({ type: VIEW_TYPES.SCHEDULE })}
      >
        <ListItemIcon>
          <Schedule />
        </ListItemIcon>
        <ListItemText>Scheduled</ListItemText>
      </ListItemButton>
      <ListItemButton
        selected={currentView.type === VIEW_TYPES.DONE}
        onClick={() => setCurrentView({ type: VIEW_TYPES.DONE })}
      >
        <ListItemIcon>
          <TaskAlt />
        </ListItemIcon>
        <ListItemText>Done</ListItemText>
      </ListItemButton>
    </>
  )
}
