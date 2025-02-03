import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd'
import TodayIcon from '@mui/icons-material/Today'
import ScheduleIcon from '@mui/icons-material/Schedule'
import GridViewIcon from '@mui/icons-material/GridView'
import TaskAltIcon from '@mui/icons-material/TaskAlt'
import AddIcon from '@mui/icons-material/Add'

import Divider from '@mui/material/Divider'

import { useState } from 'react'
import CircleIcon from '@mui/icons-material/Circle'
import IconButton from '@mui/material/IconButton'

export default function Sidebar() {
  const [selectedId, setSelectedIndex] = useState()

  //  const handleSelectIndex =
  return (
    <>
      <Box
        sx={{ borderRight: '1px solid black' }}
        p={2}
      >
        <List>
          <ListItemButton>
            <ListItemIcon>
              <GridViewIcon />
            </ListItemIcon>
            <ListItemText>All</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <TodayIcon />
            </ListItemIcon>
            <ListItemText>Today</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <ScheduleIcon />
            </ListItemIcon>
            <ListItemText>Scheduled</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <TaskAltIcon />
            </ListItemIcon>
            <ListItemText>Done</ListItemText>
          </ListItemButton>
          <Divider>
            <IconButton>
              <AddIcon />
            </IconButton>
            <ListItemText></ListItemText>
          </Divider>
          <ListItemButton>
            <ListItemIcon>
              <CircleIcon color='secondary' />
            </ListItemIcon>
            <ListItemText>Personal</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <CircleIcon color='error' />
            </ListItemIcon>
            <ListItemText>Work</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <CircleIcon color='primary' />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItemButton>{' '}
          <ListItemButton>
            <ListItemIcon>
              <CircleIcon color='warning' />
            </ListItemIcon>
            <ListItemText>Periodic</ListItemText>
          </ListItemButton>
        </List>
      </Box>
    </>
  )
}
