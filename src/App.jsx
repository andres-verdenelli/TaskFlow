import Header from './layouts/Header'
import MainContent from './layouts/MainContent'

export default function App() {
  return (
    <div className='flex h-screen flex-col'>
      <Header />

      {/* el main content deberia creer el mismo, no desde un div de afuera */}
      <div className='flex grow'>
        <MainContent />
      </div>
    </div>
  )
}
