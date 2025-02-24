import { useState } from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  IconButton,
  Box,
  List,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Checkbox,
  Typography,
} from '@mui/material'
import { Add } from '@mui/icons-material'
import { useTasks } from '../hooks/useTasks'
import { useTaskView } from '../hooks/useTaskView'
import { DateCalendar, DatePicker } from '@mui/x-date-pickers'
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
          <Box
            display={'flex'}
            flexDirection={'column'}
          >
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
            <TextField
              id='outlined-basic'
              label='Notes'
              variant='outlined'
            />
            <TextField
              id='outlined-basic'
              label='Tags'
              variant='outlined'
            />
            <DatePicker
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
            />
            <Box>
              <Button
                variant='contained'
                startIcon={<CalendarTodayIcon />}
              >
                Start
              </Button>
            </Box>
            <Box>
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
              <Checkbox></Checkbox>
              <Typography>Stared</Typography>
            </Box>
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
