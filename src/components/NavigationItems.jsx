// import { GridView } from '@mui/icons-material'
// import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
// import { Today, Schedule, TaskAlt } from '@mui/icons-material'
import { VIEW_TYPES } from '../constants/viewTypes'
import { useTaskView } from '../hooks/useTaskView'
import { LayoutDashboard, Calendar1, Clock, CircleCheckBig } from 'lucide-react'

export default function NavigationItems({ setOpenSidebar }) {
  const ListItem = (text, Icon, viewType) => {
    const isSelected = currentView.type === viewType

    return (
      <button
        className={`mb-2 flex w-full cursor-pointer rounded-md p-2 hover:bg-gray-100 ${isSelected && 'bg-gray-100'}`}
        onClick={() => {
          setCurrentView({ type: viewType })
          setOpenSidebar(false)
        }}
      >
        <div className='mr-2'>
          <Icon />
        </div>
        <div>
          <span>{text}</span>
        </div>
      </button>
    )
  }
  const { currentView, setCurrentView } = useTaskView()
  return (
    <>
      <div className='p-2'>
        {ListItem('All', LayoutDashboard, VIEW_TYPES.ALL)}
        {ListItem('Today', Calendar1, VIEW_TYPES.TODAY)}
        {ListItem('Scheduled', Clock, VIEW_TYPES.SCHEDULE)}
        {ListItem('Done', CircleCheckBig, VIEW_TYPES.DONE)}
      </div>
      {/* 
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
      </ListItemButton> */}
    </>
  )
}
