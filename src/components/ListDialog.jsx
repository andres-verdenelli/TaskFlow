import { Circle, EditNote, PlaylistAdd } from '@mui/icons-material'
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { useLists } from '../hooks/useLists'
import { COLORS } from '../constants/colors'

//TODO
//[] apretar enter y mandar formulario

export default function ListDialog({ mode = 'create', listId = null }) {
  const [isOpen, setIsOpen] = useState(false)
  const [listName, setListName] = useState('')
  const [color, setColor] = useState('')
  const { createList, updateList, getListById, deleteList } = useLists()
  const isEditMode = mode === 'edit'

  useEffect(() => {
    if (isEditMode && isOpen && listId) {
      const list = getListById(listId)
      setListName(list.name)
      setColor(list.color)
    }
  }, [isOpen, isEditMode, listId, getListById])

  const handleOpen = () => {
    setIsOpen(true)
  }
  const handleClose = () => {
    setIsOpen(false)
    setListName('')
    setColor('')
  }
  const handleSubmit = () => {
    //evitar enviar formulario en blanco

    if (isEditMode) {
      updateList(listId, { name: listName, color })
    }
    if (!isEditMode) {
      createList(listName, color)
    }
    handleClose()
  }

  const handleDelete = () => {
    deleteList(listId)
    handleClose()
  }

  return (
    <>
      <Button
        variant='contained'
        endIcon={isEditMode ? <EditNote /> : <PlaylistAdd />}
        onClick={handleOpen}
      >
        {isEditMode ? 'Edit List' : 'Create List'}
      </Button>
      <Dialog
        open={isOpen}
        onClose={handleClose}
      >
        <DialogTitle> {isEditMode ? 'Edit List' : 'Create List'}</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label='List Name'
            value={listName}
            margin='dense'
            onChange={e => setListName(e.target.value)}
          ></TextField>

          <FormControl
            margin='dense'
            fullWidth
          >
            <InputLabel id='select-color'>Color</InputLabel>
            <Select
              labelId='select-color'
              id='select-color'
              value={color}
              label='Color'
              onChange={e => setColor(e.target.value)}
            >
              {COLORS.map(color => (
                <MenuItem
                  key={color.value}
                  value={color.value}
                >
                  <Box
                    display={'flex'}
                    gap={'1rem'}
                  >
                    <Circle color={color.value} />
                    {color.label}
                  </Box>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          {isEditMode && (
            <Button
              variant='outlined'
              color='error'
              onClick={handleDelete}
            >
              Delete
            </Button>
          )}
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
            {isEditMode ? 'Save' : 'Create'}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
