import Button from '@mui/material/Button'
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd'
import { Circle } from '@mui/icons-material'
import { useLists } from '../hooks/useLists'

//TODO si apreto enter en vez de create, el boton queda con una animacion tildada
//TODONo crear lista o editar lista si el campo esta vacio

//estaba creando el estado para manejar el color y considerando unificar el modal de lista para hacer uno solo, es un componente complejo y en task tambien lo va a ser

export default function CreateListDialog() {
  const { createList } = useLists()
  const [isOpen, setIsOpen] = useState(false)
  const [textInput, setTextInpup] = useState('')
  const [color, setColor] = useState('')

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)
  const handleSubmit = () => {
    createList(textInput)
    handleClose()
    setTextInpup('')
    setColor('')
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
            fullWidth
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

          <FormControl
            margin='dense'
            fullWidth
          >
            <InputLabel id='select-color-label'>Color</InputLabel>
            <Select
              labelId='select-color-label'
              label='color'
              value={color}
            >
              {[
                { value: 'primary', label: 'Blue' },
                { value: 'secondary', label: 'Violet' },
                { value: 'success', label: 'Green' },
                { value: 'warning', label: 'Orange' },
                { value: 'error', label: 'Red' },
                { value: 'black', label: 'Black' },
              ].map(({ value, label }) => (
                <MenuItem
                  key={value}
                  value={value}
                  onClick={() => setColor(value)}
                >
                  <Box display={'flex'}>
                    <Circle
                      color={value}
                      sx={{ paddingRight: '.5rem' }}
                    />
                    {label}
                  </Box>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
