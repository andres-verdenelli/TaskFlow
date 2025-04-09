import Header from './layouts/Header'
import MainContent from './layouts/MainContent'

export default function App() {
  return (
    <div className='flex h-screen flex-col'>
      <Header />
      <MainContent />
    </div>
  )
}
