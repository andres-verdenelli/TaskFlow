import NavigationItems from '../components/NavigationItems'
import TaskListSection from '../components/TaskListsSection'
import TaskListDialog from '../components/TaskListDialog'

export default function Sidebar({ openSidebar, setOpenSidebar }) {
  return (
    <>
      {openSidebar && (
        <div className='fixed inset-0'>
          <div
            className='fixed inset-0 z-50 bg-black opacity-15'
            onClick={() => setOpenSidebar(false)}
          ></div>
          <div className='fixed z-51 flex h-full min-w-50 flex-col justify-between border-r-1 border-gray-200 bg-white'>
            <ul>
              <NavigationItems setOpenSidebar={setOpenSidebar} />
              <div className='w-full border-b-1 border-gray-300'></div>
              <TaskListSection setOpenSidebar={setOpenSidebar} />
            </ul>

            <div
              onClick={e => e.stopPropagation()}
              className='flex content-center justify-center p-1'
            >
              <TaskListDialog />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
