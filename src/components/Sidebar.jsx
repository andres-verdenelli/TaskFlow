import { Box, List, Divider } from '@mui/material'
import NavigationItems from './NavigationItems'
import ListsSection from './ListsSection'
import CreateListDialog from './CreateListDialog'

export default function Sidebar() {
  return (
    <Box
      borderRight={'1px solid #e0e0e0'}
      p={2}
      minWidth={200}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'space-between'}
    >
      <List>
        <NavigationItems />
        <Divider sx={{ marginY: '1rem' }} />
        <ListsSection />
      </List>
      <CreateListDialog />
    </Box>
  )
}
