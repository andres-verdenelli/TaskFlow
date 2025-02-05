import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'
import { CreateTaskDialog } from './CreateTaskDialog'
import { useState } from 'react'

export default function Header({ createTask, currentView }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
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
          <Button
            variant='outlined'
            sx={{
              color: 'white',
              borderColor: 'white',
            }}
            onClick={() => setIsDialogOpen(true)}
            endIcon={<AddIcon />}
          >
            create task
          </Button>
        </Toolbar>
      </AppBar>
      <CreateTaskDialog
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onSubmit={name => createTask(name, currentView.listId)}
      />
    </Box>
  )
}
