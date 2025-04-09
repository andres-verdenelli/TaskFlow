import { Menu } from 'lucide-react'
import { useState } from 'react'
import { useTaskView } from '../hooks/useTaskView'
import Sidebar from './Sidebar'

export default function Header() {
  const { getCurrentViewName } = useTaskView()

  const [isSidebarOpen, setSidebarOpen] = useState(false)

  return (
    <header>
      <div className='grid grid-cols-3 border-b-1 border-b-gray-300 p-4'>
        <div className='flex items-center'>
          <button
            className='p-1'
            onClick={() => setSidebarOpen(true)}
          >
            <Menu />
          </button>
        </div>
        <div className='flex items-center justify-center'>
          <span className='text-xl'>{getCurrentViewName()}</span>
        </div>
        <div className='flex items-center justify-end'>
          {/* <button
            className='p-1'
            onClick={() => setOpenSidebar(true)}
          >
            {currentView.type === VIEW_TYPES.LIST && (
              <TaskListDialog
                mode='edit'
                listId={currentView.listId}
              />
            )}
          </button> */}
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
