import { useTaskView } from '../hooks/useTaskView'
import { VIEW_TYPES } from '../constants/viewTypes'
import { Menu } from 'lucide-react'
import TaskListDialog from '../components/TaskListDialog'

export default function Header({ setOpenSidebar }) {
  const { getCurrentViewName, currentView } = useTaskView()

  return (
    <header>
      <div className='grid grid-cols-3 border-b-1 border-b-gray-300 p-4'>
        <div className='flex items-center'>
          <button
            className='p-1'
            onClick={() => setOpenSidebar(true)}
          >
            <Menu />
          </button>
        </div>
        <div className='flex items-center justify-center'>
          <span className='text-xl'>{getCurrentViewName()}</span>
        </div>
        <div className='flex items-center justify-end'>
          <button
            className='p-1'
            onClick={() => setOpenSidebar(true)}
          >
            {currentView.type === VIEW_TYPES.LIST && (
              <TaskListDialog
                mode='edit'
                listId={currentView.listId}
              />
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
