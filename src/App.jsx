import Sidebar from './components/Sidebar'
import Header from './components/Header'
import { Box } from '@mui/material'
import MainContent from './components/MainContent'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Box
        display={'flex'}
        flexDirection={'column'}
        height={'100vh'}
      >
        <Header />
        <Box
          display={'flex'}
          flexGrow={1}
        >
          <Sidebar />
          <MainContent />
        </Box>
        <Footer />
      </Box>
    </>
  )
}
