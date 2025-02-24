import ListItem from '@mui/material/ListItem'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'
import { useTasks } from '../hooks/useTasks'
import EditIcon from '@mui/icons-material/Edit'

export default function Task({ task }) {
  const { deleteTask, renameTask, checkTask } = useTasks()
  return (
    <ListItem sx={{ display: 'flex', alignItems: 'center' }}>
      <Checkbox
        checked={task.isDone}
        onChange={() => checkTask(task.id)}
      />
      <TextField
        sx={{ flexGrow: 1, mr: 2 }}
        variant='standard'
        value={task.name}
        onChange={e => renameTask(task.id, e.target.value)}
      ></TextField>
      <IconButton onClick={() => deleteTask(task.id)}>
        <DeleteIcon />
      </IconButton>
      <IconButton>
        <EditIcon />
      </IconButton>
    </ListItem>
  )
}
