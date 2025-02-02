import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import SettingsIcon from '@mui/icons-material/Settings'

export default function Sidebar({
  createTaskList,
  deleteTaskList,
  taskList,
  selectTaskList,
}) {
  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Button
          onClick={() => {
            const userInput = prompt('Please enter ToDo List Name:')
            if (userInput) createTaskList(userInput)
          }}
          variant='contained'
        >
          Create new list
        </Button>

        <List
          component='nav'
          arial-label='secondary mailbox folder'
        >
          {taskList.map(taskList => (
            <ListItemButton
              key={taskList.id}
              selected={taskList.isSelected}
              onClick={() => selectTaskList(taskList.id)}
            >
              <ListItemText key={taskList.id}>{taskList.name}</ListItemText>
              <IconButton
                onClick={e => {
                  e.stopPropagation()
                  deleteTaskList(taskList.id)
                }}
                edge='end'
              >
                {/* <SettingsIcon /> */}
                <DeleteIcon />
              </IconButton>
            </ListItemButton>
          ))}
        </List>
      </Box>
    </>
  )
}
