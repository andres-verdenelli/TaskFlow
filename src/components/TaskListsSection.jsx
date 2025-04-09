import { VIEW_TYPES } from '../constants/viewTypes'
import { useTaskView } from '../hooks/useTaskView'
import { useLists } from '../hooks/useLists'
import { Circle } from 'lucide-react'

export default function TaskListSection({ setSidebarOpen }) {
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
          <Circle />
        </div>
        <div>
          <span>{list.name}</span>
        </div>
      </button>
    )
  }
  return (
    <>
      {lists.map(list => (
        <TaskListFn
          key={list.id}
          list={list}
        />
      ))}
    </>
  )
}
