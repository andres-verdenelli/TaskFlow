import { Cog, Menu } from 'lucide-react'
import { useState } from 'react'
import { useTaskView } from '../hooks/useTaskView'
import Sidebar from './Sidebar'
import { VIEW_TYPES } from '../constants/viewTypes'
import TaskListForm from '../components/TaskListForm'

export default function Header() {
  const [isSidebarOpen, setSidebarOpen] = useState(false)
  const [isTaskListFormOpen, setTaskListFormOpen] = useState(false)
  const { getCurrentViewName, currentView } = useTaskView()

  return (
    <header>
      <div className='grid grid-cols-3 border-b-1 border-b-gray-300 p-4'>
        <div className='flex items-center'>
          <button
            className='rounded-md p-1 hover:bg-zinc-100'
            onClick={() => setSidebarOpen(true)}
          >
            <Menu />
          </button>
        </div>
        <div className='flex items-center justify-center'>
          <span className='text-xl'>{getCurrentViewName()}</span>
        </div>
        <div className='flex items-center justify-end'>
          {currentView.type === VIEW_TYPES.LIST && (
            <button
              className='rounded-md p-1 hover:bg-zinc-100'
              onClick={() => setTaskListFormOpen(true)}
            >
              <Cog />
            </button>
          )}
          {isTaskListFormOpen && (
            <TaskListForm
              setTaskListFormOpen={setTaskListFormOpen}
              listId={currentView.listId}
            />
          )}
        </div>
      </div>
      {isSidebarOpen && (
        <>
          <div
            className='fixed inset-0 z-50 bg-black opacity-20'
            onClick={() => setSidebarOpen(false)}
          ></div>
          <div className='fixed top-0 bottom-0 left-0 z-51 min-w-40 bg-white'>
            <Sidebar setSidebarOpen={setSidebarOpen} />
          </div>
        </>
      )}
    </header>
  )
}
