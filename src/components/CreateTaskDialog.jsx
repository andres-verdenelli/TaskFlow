import { useState } from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from '@mui/material'
import { Add } from '@mui/icons-material'
import { useTasks } from '../hooks/useTasks'

export function CreateTaskDialog({ currentView }) {
  const [taskName, setTaskName] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const { createTask } = useTasks()

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)
  const handleSubmit = () => {
    createTask(taskName, currentView.listId)
    handleClose()
    setTaskName('')
  }

  return (
    <>
      <Button
        variant='outlined'
        endIcon={<Add />}
        onClick={handleOpen}
      >
        Create Task
      </Button>
      <Dialog
        open={isOpen}
        onClose={handleClose}
      >
        <DialogTitle>Create New Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin='dense'
            value={taskName}
            onChange={e => setTaskName(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                e.preventDefault()
                handleSubmit()
              }
            }}
            label='Task Name'
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={handleSubmit}
            variant='contained'
          >
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
