import './App.css'
import Sidebar from './components/Sidebar'
import Task from './components/Task'
import List from '@mui/material/List'
import Header from './components/Header'
import { Box } from '@mui/material'
import useTaskManager from './hooks/useTaskManager'
import useTaskListManager from './hooks/useTaskListManager'
import { VIEW_TYPES } from './constants/viewTypes'
import useTaskView from './hooks/useTaskView'

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

  const { createList, deleteList, updateList, lists } = useTaskListManager()

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
        <Header
          createTask={createTask}
          currentView={currentView}
        />
        <Box
          display={'flex'}
          flexGrow={1}
        >
          <Sidebar
            createList={createList}
            lists={lists}
            currentView={currentView}
            setCurrentView={setCurrentView}
            VIEW_TYPES={VIEW_TYPES}
          />
          <Box flexGrow={1}>
            <List>
              {getVisibleTasks().map(task => (
                <Task
                  task={task}
                  key={task.id}
                  deleteTask={deleteTask}
                  renameTask={renameTask}
                  checkTask={checkTask}
                />
              ))}
            </List>
          </Box>
        </Box>
      </Box>
    </>
  )
}
