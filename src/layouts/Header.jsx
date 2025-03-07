import { Button, IconButton, useMediaQuery, useTheme } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Menu } from '@mui/icons-material'
import { useTaskView } from '../hooks/useTaskView'
import { VIEW_TYPES } from '../constants/viewTypes'
import CreateTaskListDialog from '../components/CreateTaskListDialog'

export default function Header({ setOpenSidebar }) {
  const { getCurrentViewName, currentView } = useTaskView()

  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'))

  return (
    <Box>
      <AppBar position='static'>
        <Toolbar
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3,1fr)',
            justifyItems: 'center',
          }}
        >
          {!isDesktop && (
            <Box justifySelf={'left'}>
              <IconButton
                edge='start'
                onClick={() => setOpenSidebar(true)}
              >
                <Menu />
              </IconButton>
            </Box>
          )}
          <Typography
            variant='h1'
            fontSize={'1.4rem'}
          >
            {getCurrentViewName()}
          </Typography>
          <Box justifySelf={'end'}>
            {currentView.type === VIEW_TYPES.LIST && (
              <CreateTaskListDialog
                mode='edit'
                listId={currentView.listId}
              />
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
