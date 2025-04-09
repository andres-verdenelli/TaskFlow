import NavigationItems from '../components/NavigationItems'
import TaskListSection from '../components/TaskListsSection'
import TaskListDialog from '../components/TaskListDialog'

export default function Sidebar({ setSidebarOpen }) {
  return (
    <div className='fixed z-51 flex h-full min-w-50 flex-col justify-between border-r-1 border-gray-200 bg-white'>
      <ul>
        <NavigationItems setSidebarOpen={setSidebarOpen} />
        <div className='w-full border-b-1 border-gray-300'></div>
        <TaskListSection setSidebarOpen={setSidebarOpen} />
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
