import { Box, Button, List } from '@mui/material'
import Task from './Task'
import { CreateTaskDialog } from './CreateTaskDialog'
import EditListDialog from './EditListDialog'

export default function MainContent({
  getVisibleTasks,
  deleteTask,
  renameTask,
  checkTask,
  createTask,
  currentView,
  getListNameById,
  updateList,
  deleteList,
}) {
  return (
    <Box flexGrow={1}>
      <Box
        display={'flex'}
        justifyContent={'flex-end'}
        p={2}
        sx={{ borderBottom: '1px solid #e2e2e2' }}
      >
        <CreateTaskDialog
          createTask={createTask}
          currentView={currentView}
        />
        <EditListDialog
          currentView={currentView}
          getListNameById={getListNameById}
          updateList={updateList}
          deleteList={deleteList}
        />
      </Box>
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
  )
}
