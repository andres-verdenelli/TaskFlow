import './App.css'
import Sidebar from './components/Sidebar'
import Task from './components/Task'
import Header from './components/Header'
import { Box, List } from '@mui/material'
import useTaskManager from './hooks/useTaskManager'
import useTaskListManager from './hooks/useTaskListManager'
import useTaskView from './hooks/useTaskView'
import MainContent from './components/MainContent'

export default function App() {
  const {
    createTask,
    deleteTask,
    renameTask,
    checkTask,
    tasks,
    getTasksByList,
    getCompletedTasks,
  } = useTaskManager()

  const { createList, deleteList, updateList, lists, getListNameById } =
    useTaskListManager()

  const { currentView, setCurrentView, getVisibleTasks } = useTaskView({
    tasks,
    getCompletedTasks,
    getTasksByList,
  })

  return (
    <>
      <Box
        display={'flex'}
        flexDirection={'column'}
        height={'100vh'}
      >
        <Header />
        <Box
          display={'flex'}
          flexGrow={1}
        >
          <Sidebar
            createList={createList}
            lists={lists}
            currentView={currentView}
            setCurrentView={setCurrentView}
          />
          <MainContent
            getVisibleTasks={getVisibleTasks}
            deleteTask={deleteTask}
            renameTask={renameTask}
            checkTask={checkTask}
            createTask={createTask}
            currentView={currentView}
            getListNameById={getListNameById}
            updateList={updateList}
            deleteList={deleteList}
          />
        </Box>
        <Box sx={{ borderTop: '1px solid #e2e2e2' }}>
          <h1>Footer</h1>
        </Box>
      </Box>
    </>
  )
}
