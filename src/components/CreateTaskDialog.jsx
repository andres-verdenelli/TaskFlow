import { useState } from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from '@mui/material'

export function CreateTaskDialog({ open, onClose, onSubmit }) {
  const [taskName, setTaskName] = useState('')

  const handleSubmit = () => {
    onSubmit(taskName)
    setTaskName('')
    onClose()
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
    >
      <DialogTitle>Create New Task</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          value={taskName}
          onChange={e => setTaskName(e.target.value)}
          label='Task Name'
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button
          onClick={handleSubmit}
          variant='contained'
        >
          Create
        </Button>
      </DialogActions>
    </Dialog>
  )
}
