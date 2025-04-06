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
    </>
  )
}
