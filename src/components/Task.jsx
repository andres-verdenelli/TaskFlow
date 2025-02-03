import { useState } from 'react'
import ListItem from '@mui/material/ListItem'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'

export default function Task({ task, deleteTask }) {
  const [name, setName] = useState(task.name)
  const [isDone, setIsDone] = useState(task.isDone)

  return (
    <ListItem>
      <Checkbox
        checked={isDone}
        onChange={() => setIsDone(!isDone)}
      />
      <TextField
        variant='standard'
        value={name}
        onChange={e => setName(e.target.value)}
      ></TextField>
      <IconButton onClick={() => deleteTask(task)}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  )
}
