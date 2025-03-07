import { useState } from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Box,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Checkbox,
  Typography,
  IconButton,
  Fab,
} from '@mui/material'
import { Add } from '@mui/icons-material'
import { useTasks } from '../hooks/useTasks'
import { useTaskView } from '../hooks/useTaskView'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import dayjs from 'dayjs'

export function CreateTaskDialog() {
  const { currentView } = useTaskView()
  const { createTask } = useTasks()

  const [taskName, setTaskName] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [dueDate, setDueDate] = useState(dayjs())

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)
  const handleSubmit = () => {
    createTask(taskName, currentView.listId)
    handleClose()
    setTaskName('')
  }

  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          bottom: { xs: 16, sm: 24 },
          right: { xs: 16, sm: 24 },
        }}
      >
        <Fab
          color='primary'
          onClick={handleOpen}
        >
          <Add />
        </Fab>
      </Box>
      <Dialog
        open={isOpen}
        onClose={handleClose}
      >
        <DialogTitle sx={{ border: '1px solid red' }}>
          Create New Task
        </DialogTitle>
        <DialogContent sx={{ border: '1px solid red' }}>
          <Box
            display={'flex'}
            flexDirection={'column'}
          >
            {/* TASK NAME */}
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
            {/* LIST */}
            <FormControl>
              <InputLabel id='demo-simple-select-label'>List</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                label='List'
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            {/* NOTES */}
            <TextField
              id='outlined-basic'
              label='Notes'
              variant='outlined'
            />
            {/* TAGS */}
            <TextField
              id='outlined-basic'
              label='Tags'
              variant='outlined'
            />

            {/* DATE PICKER */}
            {/* <DatePicker
              value={dueDate}
              format='DD MMM'
              label='Due Date'
              onChange={newValue => {
                setDueDate(newValue)
              }}
              disablePast
              views={['day', 'month']}
              showDaysOutsideCurrentMonth
              slotProps={{
                textField: {
                  inputProps: { readOnly: true }, // Bloquea la edición manual
                },
                actionBar: {
                  actions: ['clear', 'today'],
                },
              }}
            /> */}

            <Box>
              {/* START DATE */}
              <Button
                variant='contained'
                startIcon={<CalendarTodayIcon />}
              >
                Start
              </Button>
            </Box>
            <Box>
              {/* DUE DATE */}
              <Button
                variant='contained'
                startIcon={<CalendarTodayIcon />}
              >
                Due
              </Button>
            </Box>
            <Box
              display={'flex'}
              alignItems={'center'}
            >
              {/* STARRED */}
              <Checkbox></Checkbox>
              <Typography>Stared</Typography>
            </Box>

            {/* PRIORITY */}
            <FormControl>
              <InputLabel id='demo-simple-select-label'>Priority</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                label='Priority'
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions
          sx={{ border: '1px solid red', justifyContent: 'space-between' }}
        >
          {/* ACTIONS */}

          <Button
            variant='outlined'
            onClick={handleClose}
          >
            Cancel
          </Button>
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
