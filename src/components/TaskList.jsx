import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import CircleIcon from '@mui/icons-material/Circle'

export default function TaskList({ name, selected, onClick, color }) {
  return (
    <>
      <ListItemButton
        selected={selected}
        onClick={() => {
          onClick()
        }}
      >
        <ListItemIcon>
          <CircleIcon color={color} />
        </ListItemIcon>
        <ListItemText>{name}</ListItemText>
      </ListItemButton>
    </>
  )
}
