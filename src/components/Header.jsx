import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import AddIcon from '@mui/icons-material/Add'

export default function Header({ handleCreateTask }) {
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
            onClick={handleCreateTask}
            endIcon={<AddIcon />}
          >
            create task
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
