import { GridView } from '@mui/icons-material'
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { VIEW_TYPES } from '../constants/viewTypes'
import { Today, Schedule, TaskAlt } from '@mui/icons-material'
import { useTaskView } from '../hooks/useTaskView'
import { LayoutDashboard, Calendar1, Clock, CircleCheckBig } from 'lucide-react'

export default function NavigationItems({ setOpenSidebar }) {
  const { currentView, setCurrentView } = useTaskView()
  return (
    <>
      <div className='border-1 border-black'>
        <div className='mx-4 my-2 flex cursor-pointer rounded-md p-2 hover:bg-gray-100'>
          <div className='mr-2'>
            <LayoutDashboard />
          </div>
          <div>
            <span>All</span>
          </div>
        </div>
        <div className='mx-4 my-2 flex cursor-pointer rounded-md p-2 hover:bg-gray-100'>
          <div className='mr-2'>
            <Calendar1 />
          </div>
          <div>
            <span>Today</span>
          </div>
        </div>
        <button className='mx-4 my-2 flex cursor-pointer rounded-md p-2 hover:bg-gray-100'>
          <div className='mr-2'>
            <Clock />
          </div>
          <div>
            <span>Scheduled</span>
          </div>
        </button>
        <div className='mx-4 my-2 flex cursor-pointer rounded-md p-2 hover:bg-gray-100'>
          <div className='mr-2'>
            <CircleCheckBig />
          </div>
          <div>
            <span>Done</span>
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
