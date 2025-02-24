import { Box, List } from '@mui/material'
import Task from './Task'
import { CreateTaskDialog } from './CreateTaskDialog'
import { useTaskView } from '../hooks/useTaskView'
import ListDialog from './ListDialog'
import { VIEW_TYPES } from '../constants/viewTypes'

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
        <CreateTaskDialog />
        {currentView.type === VIEW_TYPES.LIST && (
          <ListDialog
            mode='edit'
            listId={currentView.listId}
          />
        )}
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
