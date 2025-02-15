import './App.css'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import { Box } from '@mui/material'
import MainContent from './components/MainContent'

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
        <Box sx={{ borderTop: '1px solid #e2e2e2' }}>
          <h1>Footer</h1>
        </Box>
      </Box>
    </>
  )
}
