import { useContext } from 'react'
import { ViewContext } from '../context/ViewContext.jsx'

export const useTaskView = () => {
  const context = useContext(ViewContext)
  if (!context) {
    throw new Error('useView debe usarse dentro de ViewProvider')
  }
  return context
}
