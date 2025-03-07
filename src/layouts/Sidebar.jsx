import {
  Box,
  List,
  Divider,
  Drawer,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import NavigationItems from '../components/NavigationItems'
import TaskListSection from '../components/TaskListsSection'
import CreateListDialog from '../components/CreateTaskListDialog'

export default function Sidebar({ openSidebar, setOpenSidebar }) {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'))

  const SidebarContent = () => (
    <Box
      borderRight={'1px solid #e0e0e0'}
      minWidth={200}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'space`-between'}
      height={'100%'}
    >
      <List>
        <NavigationItems setOpenSidebar={setOpenSidebar} />
        <Divider sx={{ marginY: '1rem' }} />
        <TaskListSection setOpenSidebar={setOpenSidebar} />
      </List>
      <Box
        padding={1}
        display={'flex'}
        alignContent={'center'}
        justifyContent={'center'}
        onClick={e => e.stopPropagation()}
      >
        <CreateListDialog />
      </Box>
    </Box>
  )

  if (isDesktop) {
    return <SidebarContent />
  }
  return (
    <Drawer
      open={openSidebar}
      onClose={() => setOpenSidebar(false)}
    >
      <SidebarContent />
    </Drawer>
  )
}
