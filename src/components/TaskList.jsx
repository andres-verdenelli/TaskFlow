import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import CircleIcon from '@mui/icons-material/Circle'

export default function TaskList({ name, selected, onClick }) {
  return (
    <ListItemButton
      selected={selected}
      onClick={() => {
        onClick()
        if (selected) {
          console.log('Open List config')
        }
      }}
    >
      <ListItemIcon>
        <CircleIcon color='warning' />
      </ListItemIcon>
      <ListItemText>{name}</ListItemText>
    </ListItemButton>
  )
}
