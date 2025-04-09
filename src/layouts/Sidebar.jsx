import TaskListDialog from '../components/TaskListDialog'
import { VIEW_TYPES } from '../constants/viewTypes'
import { useTaskView } from '../hooks/useTaskView'
import { useLists } from '../hooks/useLists'
import {
  CircleSmall,
  LayoutDashboard,
  Calendar1,
  Clock,
  CircleCheckBig,
} from 'lucide-react'

export default function Sidebar({ setSidebarOpen }) {
  const { lists } = useLists()
  const { currentView, setCurrentView } = useTaskView()

  const TaskListFn = ({ list }) => {
    const isSelected =
      currentView.type === VIEW_TYPES.LIST && currentView.listId === list.id
    return (
      <button
        className={`flex w-full cursor-pointer p-4 hover:bg-gray-100 ${isSelected && 'bg-gray-100'}`}
        onClick={() => {
          setCurrentView({ type: VIEW_TYPES.LIST, listId: list.id })
          setSidebarOpen(false)
        }}
      >
        <div className='mr-2'>
          <CircleSmall />
        </div>
        <div>
          <span>{list.name}</span>
        </div>
      </button>
    )
  }

  const ListItem = (text, Icon, viewType) => {
    const isSelected = currentView.type === viewType

    return (
      <button
        className={`mb-2 flex w-full cursor-pointer rounded-md p-2 hover:bg-gray-100 ${isSelected && 'bg-gray-100'}`}
        onClick={() => {
          setCurrentView({ type: viewType })
          setSidebarOpen(false)
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

  return (
    <div className='flex h-full min-w-50 flex-col justify-between border-r-1 border-gray-200 bg-white'>
      <ul>
        <div className='p-2'>
          {ListItem('All', LayoutDashboard, VIEW_TYPES.ALL)}
          {ListItem('Today', Calendar1, VIEW_TYPES.TODAY)}
          {ListItem('Scheduled', Clock, VIEW_TYPES.SCHEDULE)}
          {ListItem('Done', CircleCheckBig, VIEW_TYPES.DONE)}
        </div>
        <div className='w-full border-b-1 border-gray-300'></div>
        {lists.map(list => (
          <TaskListFn
            key={list.id}
            list={list}
          />
        ))}
      </ul>
      <div
        onClick={e => e.stopPropagation()}
        className='flex content-center justify-center p-1'
      >
        <TaskListDialog />
      </div>
    </div>
  )
}
