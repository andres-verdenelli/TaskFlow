import {
  Box,
  List,
  Divider,
  Drawer,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import NavigationItems from './NavigationItems'
import ListsSection from './ListsSection'
import ListDialog from './ListDialog'

export default function Sidebar({ openSidebar, setOpenSidebar }) {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'))

  const SidebarContent = () => (
    <Box
      borderRight={'1px solid #e0e0e0'}
      minWidth={200} //aca la ia sugiere width 240
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'space-between'}
      height={'100%'}
    >
      <List>
        <NavigationItems />
        <Divider sx={{ marginY: '1rem' }} />
        <ListsSection />
      </List>
      <Box
        padding={1}
        display={'flex'}
        alignContent={'center'}
        justifyContent={'center'}
        onClick={e => e.stopPropagation()}
      >
        <ListDialog />
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
