import Sidebar from './components/Sidebar'
import Header from './components/Header'
import { Box } from '@mui/material'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import { useState } from 'react'

export default function App() {
  const [openSidebar, setOpenSidebar] = useState(false)
  return (
    <>
      <Box
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
        {/* <Footer /> */}
      </Box>
    </>
  )
}
