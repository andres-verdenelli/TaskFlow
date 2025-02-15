import { Box, List } from '@mui/material'
import Task from './Task'
import { CreateTaskDialog } from './CreateTaskDialog'
import EditListDialog from './EditListDialog'
import { useTaskView } from '../hooks/useTaskView'

export default function MainContent() {
  const { visibleTasks, currentView } = useTaskView()
  return (
    <Box flexGrow={1}>
      <Box
        display={'flex'}
        justifyContent={'flex-end'}
        p={2}
        sx={{ borderBottom: '1px solid #e2e2e2' }}
      >
        <CreateTaskDialog currentView={currentView} />
        <EditListDialog currentView={currentView} />
      </Box>
      <List>
        {visibleTasks.map(task => (
          <Task
            task={task}
            key={task.id}
          />
        ))}
      </List>
    </Box>
  )
}
