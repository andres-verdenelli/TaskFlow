// import { Button, IconButton, useMediaQuery, useTheme } from '@mui/material'
// import AppBar from '@mui/material/AppBar'
// import Box from '@mui/material/Box'
// import Toolbar from '@mui/material/Toolbar'
// import Typography from '@mui/material/Typography'
// import { Menu as MenuMUI } from '@mui/icons-material'
import { useTaskView } from '../hooks/useTaskView'
import { VIEW_TYPES } from '../constants/viewTypes'
import CreateTaskListDialog from '../components/CreateTaskListDialog'
import { Menu } from 'lucide-react'

export default function Header({ setOpenSidebar }) {
  const { getCurrentViewName, currentView } = useTaskView()

  return (
    <div>
      <div>
        <header>
          <div className='grid grid-cols-3 border-b-1 border-b-gray-300 p-4'>
            <div className='flex items-center'>
              <button
                className='p-1'
                onClick={() => setOpenSidebar(true)}
              >
                <Menu />
              </button>
            </div>
            <div className='flex items-center justify-center'>
              <span className='text-xl'>{getCurrentViewName()}</span>
            </div>
            <div className='flex items-center justify-end'>
              <button
                className='p-1'
                onClick={() => setOpenSidebar(true)}
              >
                {currentView.type === VIEW_TYPES.LIST && (
                  <CreateTaskListDialog
                    mode='edit'
                    listId={currentView.listId}
                  />
                )}
              </button>
            </div>
          </div>
        </header>
      </div>
      {/* <Box>
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
                  <MenuMUI />
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
      </Box>*/}
    </div>
  )
}
