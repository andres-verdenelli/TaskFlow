import { Box, List, Divider } from '@mui/material'
import NavigationItems from './NavigationItems'
import ListsSection from './ListsSection'
import CreateListDialog from './CreateListDialog'
import { useLists } from '../hooks/useLists'

export default function Sidebar() {
  const { lists, createList } = useLists()

  return (
    <>
      <Box
        sx={{ borderRight: '1px solid #e0e0e0' }}
        p={2}
        minWidth={200}
      >
        <List>
          <NavigationItems />
          <Divider sx={{ marginY: '1rem' }} />
          <ListsSection lists={lists} />
          <CreateListDialog createList={createList} />
        </List>
      </Box>
    </>
  )
}
