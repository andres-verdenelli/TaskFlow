import { useContext } from 'react'
import { ListContext } from '../context/ListContext'

export function useLists() {
  const context = useContext(ListContext)
  if (!context) {
    throw new Error('useLists debe usarse dentro de ListProvider')
  }
  return context
}
