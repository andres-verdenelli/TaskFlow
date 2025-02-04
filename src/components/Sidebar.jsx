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
import { useRef, useState } from 'react'
import CircleIcon from '@mui/icons-material/Circle'
import IconButton from '@mui/material/IconButton'
import DialogContent from '@mui/material/DialogContent'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogActions from '@mui/material/DialogActions'
import TextField from '@mui/material/TextField'
import TaskList from './TaskList'

export default function Sidebar({
  createList,
  addList,
  lists,
  setSelectedIndex,
  selectedIndex,
}) {
  const [open, setOpen] = useState(false)
  const [listName, setListName] = useState('')
  const textFieldRef = useRef(null)

  const handleOpen = () => {
    setOpen(true)
    setTimeout(() => textFieldRef.current?.focus(), 0)
  }
  const handleClose = () => setOpen(false)

  const handleSubmit = () => {
    const newList = createList(listName, 'grey')
    addList(newList)
    setListName('')
    setOpen(false)
  }

  return (
    <>
      <Box
        sx={{ borderRight: '1px solid #e0e0e0' }}
        p={2}
      >
        <List>
          <ListItemButton
            selected={selectedIndex === 1}
            onClick={() => setSelectedIndex(1)}
          >
            <ListItemIcon>
              <GridViewIcon />
            </ListItemIcon>
            <ListItemText>All</ListItemText>
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 2}
            onClick={() => setSelectedIndex(2)}
          >
            <ListItemIcon>
              <TodayIcon />
            </ListItemIcon>
            <ListItemText>Today</ListItemText>
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 3}
            onClick={() => setSelectedIndex(3)}
          >
            <ListItemIcon>
              <ScheduleIcon />
            </ListItemIcon>
            <ListItemText>Scheduled</ListItemText>
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 4}
            onClick={() => setSelectedIndex(4)}
          >
            <ListItemIcon>
              <TaskAltIcon />
            </ListItemIcon>
            <ListItemText>Done</ListItemText>
          </ListItemButton>
          <Divider>
            <IconButton onClick={() => handleOpen()}>
              {/* <AddIcon /> */}
              <PlaylistAddIcon />
            </IconButton>
            <ListItemText></ListItemText>
          </Divider>
          {lists.map((list, index) => (
            <TaskList
              key={list.id}
              name={list.name}
              selected={selectedIndex === index + 5}
              onClick={() => setSelectedIndex(index + 5)}
            />
          ))}
          <Dialog
            open={open}
            onClose={handleClose}
          >
            <DialogTitle>New List</DialogTitle>
            <DialogContent>
              <TextField
                inputRef={textFieldRef}
                fullWidth
                label='List Name'
                value={listName}
                onChange={e => setListName(e.target.value)}
                margin='dense'
                onKeyDown={e => {
                  if (e.key === 'Enter') {
                    e.preventDefault()
                    handleSubmit()
                  }
                }}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button
                onClick={handleSubmit}
                variant='contained'
              >
                Save
              </Button>
            </DialogActions>
          </Dialog>
        </List>
      </Box>
    </>
  )
}
