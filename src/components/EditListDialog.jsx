import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  DialogActions,
} from '@mui/material'
import { useState } from 'react'
import EditNoteIcon from '@mui/icons-material/EditNote'
import EditIcon from '@mui/icons-material/Edit'
import { VIEW_TYPES } from '../constants/viewTypes'
import { useLists } from '../hooks/useLists'

export default function EditListDialog({ currentView }) {
  const [isOpen, setIsOpen] = useState(false)
  const [textInput, setTextInput] = useState('')
  const { getListNameById, updateList, deleteList } = useLists()

  const handleOpen = () => {
    setIsOpen(true)
    setTextInput(getListNameById(currentView.listId))
  }
  const handleClose = () => setIsOpen(false)
  const handleSubmit = () => {
    updateList(currentView.listId, { name: textInput })
    handleClose()
    setTextInput('')
  }
  const handleDelete = () => {
    deleteList(currentView.listId)
    handleClose()
    setTextInput('')
  }

  return (
    <>
      {currentView.type === VIEW_TYPES.LIST && (
        <Button
          endIcon={<EditNoteIcon />}
          variant='outlined'
          onClick={handleOpen}
        >
          {' '}
          Edit List
        </Button>
      )}

      <Dialog
        open={isOpen}
        onClose={handleClose}
      >
        <DialogTitle>Edit List</DialogTitle>
        <DialogContent>
          <TextField
            margin='dense'
            value={textInput}
            onChange={e => setTextInput(e.target.value)}
            label='List Name'
          ></TextField>
        </DialogContent>
        <DialogActions>
          <Button
            variant='outlined'
            color='error'
            onClick={handleDelete}
          >
            Delete
          </Button>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={handleSubmit}
            variant='contained'
          >
            Edit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
