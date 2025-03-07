import { Box, List } from '@mui/material'
import Task from '../components/Task'
import { CreateTaskDialog } from '../components/CreateTaskDialog'
import { useTaskView } from '../hooks/useTaskView'
import { VIEW_TYPES } from '../constants/viewTypes'

export default function MainContent() {
  const { visibleTasks, currentView } = useTaskView()
  return (
    <Box flexGrow={1}>
      <List>
        {visibleTasks.map(task => (
          <Task
            task={task}
            key={task.id}
          />
        ))}
      </List>
      <CreateTaskDialog />
    </Box>
  )
}
