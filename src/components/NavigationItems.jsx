import { GridView } from '@mui/icons-material'
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { VIEW_TYPES } from '../constants/viewTypes'
import { Today, Schedule, TaskAlt } from '@mui/icons-material'
import { useTaskView } from '../hooks/useTaskView'
import { LayoutDashboard } from 'lucide-react'

export default function NavigationItems({ setOpenSidebar }) {
  const { currentView, setCurrentView } = useTaskView()
  return (
    <>
      <div>
        <div className='flex'>
          <div>
            <LayoutDashboard />
          </div>
          <div>
            <span>All</span>
          </div>
        </div>
      </div>
      <ListItemButton
        selected={currentView.type === VIEW_TYPES.ALL}
        onClick={() => {
          setCurrentView({ type: VIEW_TYPES.ALL })
          setOpenSidebar(false)
        }}
      >
        <ListItemIcon>
          <GridView />
        </ListItemIcon>
        <ListItemText>All</ListItemText>
      </ListItemButton>
      <ListItemButton
        selected={currentView.type === VIEW_TYPES.TODAY}
        onClick={() => {
          setCurrentView({ type: VIEW_TYPES.TODAY })
          setOpenSidebar(false)
        }}
      >
        <ListItemIcon>
          <Today />
        </ListItemIcon>
        <ListItemText>Today</ListItemText>
      </ListItemButton>
      <ListItemButton
        selected={currentView.type === VIEW_TYPES.SCHEDULE}
        onClick={() => {
          setCurrentView({ type: VIEW_TYPES.SCHEDULE })
          setOpenSidebar(false)
        }}
      >
        <ListItemIcon>
          <Schedule />
        </ListItemIcon>
        <ListItemText>Scheduled</ListItemText>
      </ListItemButton>
      <ListItemButton
        selected={currentView.type === VIEW_TYPES.DONE}
        onClick={() => {
          setCurrentView({ type: VIEW_TYPES.DONE })
          setOpenSidebar(false)
        }}
      >
        <ListItemIcon>
          <TaskAlt />
        </ListItemIcon>
        <ListItemText>Done</ListItemText>
      </ListItemButton>
    </>
  )
}
