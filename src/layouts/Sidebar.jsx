import { Drawer } from '@mui/material'
import NavigationItems from '../components/NavigationItems'
import TaskListSection from '../components/TaskListsSection'
import CreateListDialog from '../components/CreateTaskListDialog'

export default function Sidebar({ openSidebar, setOpenSidebar }) {
  const SidebarContent = () => (
    <div className='flex h-full min-w-50 flex-col justify-between border-r-1 border-gray-200'>
      <ul>
        <NavigationItems setOpenSidebar={setOpenSidebar} />
        <div className='w-full border-b-1 border-gray-300'></div>
        <TaskListSection setOpenSidebar={setOpenSidebar} />
      </ul>

      <div
        onClick={e => e.stopPropagation()}
        className='flex content-center justify-center p-1'
      >
        <CreateListDialog />
      </div>
    </div>
  )

  return (
    <Drawer
      open={openSidebar}
      onClose={() => setOpenSidebar(false)}
    >
      <SidebarContent />
    </Drawer>
  )
}
