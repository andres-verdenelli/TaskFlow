import Sidebar from './layouts/Sidebar'
import Header from './layouts/Header'
// import { Box } from '@mui/material'
import MainContent from './layouts/MainContent'
import { useState } from 'react'

export default function App() {
  const [openSidebar, setOpenSidebar] = useState(false)
  return (
    <>
      <>
        <div className='flex h-screen flex-col'>
          <Header setOpenSidebar={setOpenSidebar} />
          <div className='flex grow'>
            <Sidebar
              openSidebar={openSidebar}
              setOpenSidebar={setOpenSidebar}
            />
            <MainContent />
          </div>
        </div>
      </>
      {/* <Box
        display={'flex'}
        flexDirection={'column'}
        height={'100vh'}
      >
        <Header setOpenSidebar={setOpenSidebar} />
        <Box
          display={'flex'}
          flexGrow={1}
        >
          <Sidebar
            openSidebar={openSidebar}
            setOpenSidebar={setOpenSidebar}
          />
          <MainContent />
        </Box>
      </Box> */}
    </>
  )
}
