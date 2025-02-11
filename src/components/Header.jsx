import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'
import { CreateTaskDialog } from './CreateTaskDialog'
import { useState } from 'react'
import { VIEW_TYPES } from '../constants/viewTypes'

export default function Header({ createTask, currentView }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const handleCreateTask = name => {
    const listId =
      currentView.type === VIEW_TYPES.LIST ? currentView.listId : null
    createTask(name, listId)
  }
  return (
    <Box>
      <AppBar position='static'>
        <Toolbar>
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1 }}
          >
            To Do List App
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
