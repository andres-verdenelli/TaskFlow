import Button from '@mui/material/Button'
import { Add } from '@mui/icons-material'
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material'
import { useState } from 'react'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd'

//TODO si apreto enter en vez de create, el boton queda con una animacion tildada

export default function CreateListDialog({ createList }) {
  const [isOpen, setIsOpen] = useState(false)
  const [textInput, setTextInpup] = useState('')

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)
  const handleSubmit = () => {
    createList(textInput)
    handleClose()
    setTextInpup('')
  }
  return (
    <>
      <Button
        fullWidth
        variant='contained'
        endIcon={<PlaylistAddIcon />}
        onClick={handleOpen}
      >
        Create List
      </Button>
      <Dialog
        open={isOpen}
        onClose={handleClose}
      >
        <DialogTitle>Create List</DialogTitle>
        <DialogContent>
          <TextField
            label='List Name'
            value={textInput}
            margin='dense'
            onChange={e => setTextInpup(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                e.preventDefault()
                handleSubmit()
              }
            }}
          ></TextField>
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
