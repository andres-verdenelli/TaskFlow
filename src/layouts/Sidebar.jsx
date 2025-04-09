import { useState } from 'react'
import Button from '../components/Button'
import TaskListForm from '../components/TaskListForm'
import { useLists } from '../hooks/useLists'
import { useTaskView } from '../hooks/useTaskView'
import { VIEW_TYPES } from '../constants/viewTypes'
import {
  CircleSmall,
  LayoutDashboard,
  Calendar1,
  Clock,
  CircleCheckBig,
  ListPlus,
} from 'lucide-react'

//falta transicion al abrir

export default function Sidebar({ setSidebarOpen }) {
  const { lists } = useLists()
  const { currentView, setCurrentView } = useTaskView()
  const [isTaskListFormOpen, setTaskListFormOpen] = useState(false)

  const ListItemButton = (text, Icon, isSelected, onClick) => {
    return (
      <li>
        <button
          className={`flex w-full cursor-pointer rounded-md p-2 hover:bg-gray-100 ${isSelected && 'bg-gray-100'}`}
          onClick={onClick}
        >
          <div className='mr-2'>
            <Icon />
          </div>
          <div>
            <span>{text}</span>
          </div>
        </button>
      </li>
    )
  }

  const ListItem = (text, Icon, viewType) => {
    const isSelected = currentView.type === viewType
    const onClick = () => {
      setCurrentView({ type: viewType })
      setSidebarOpen(false)
    }

    return ListItemButton(text, Icon, isSelected, onClick)
  }

  const TaskList = ({ list }) => {
    const isSelected =
      currentView.type === VIEW_TYPES.LIST && currentView.listId === list.id

    const onClick = () => {
      setCurrentView({ type: VIEW_TYPES.LIST, listId: list.id })
      setSidebarOpen(false)
    }
    return ListItemButton(list.name, CircleSmall, isSelected, onClick)
  }

  return (
    <div className='flex h-full min-w-50 flex-col justify-between border-r-1 border-gray-200 bg-white p-4'>
      <ul className='flex flex-col gap-2'>
        {ListItem('All', LayoutDashboard, VIEW_TYPES.ALL)}
        {ListItem('Today', Calendar1, VIEW_TYPES.TODAY)}
        {ListItem('Scheduled', Clock, VIEW_TYPES.SCHEDULE)}
        {ListItem('Done', CircleCheckBig, VIEW_TYPES.DONE)}
        <div className='w-full border-b-1 border-gray-300'></div>
        {lists.map(list => (
          <TaskList
            key={list.id}
            list={list}
          />
        ))}
      </ul>

      <div className='flex justify-center'>
        <Button
          onClick={() => {
            setTaskListFormOpen(true)
          }}
        >
          Create List
          <ListPlus className='ml-2' />
        </Button>
        {isTaskListFormOpen && (
          <TaskListForm setTaskListFormOpen={setTaskListFormOpen} />
        )}
      </div>
    </div>
  )
}
