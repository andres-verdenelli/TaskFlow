import { Box, List, Divider } from '@mui/material'
import NavigationItems from './NavigationItems'
import ListsSection from './ListsSection'
import CreateListDialog from './CreateListDialog'

export default function Sidebar({
  createList,
  lists,
  currentView,
  setCurrentView,
}) {
  return (
    <>
      <Box
        sx={{ borderRight: '1px solid #e0e0e0' }}
        p={2}
        minWidth={200}
      >
        <List>
          <NavigationItems
            currentView={currentView}
            setCurrentView={setCurrentView}
          />
          <Divider sx={{ marginY: '1rem' }} />
          <ListsSection
            lists={lists}
            currentView={currentView}
            setCurrentView={setCurrentView}
          />
          <CreateListDialog createList={createList} />
        </List>
      </Box>
    </>
  )
}
