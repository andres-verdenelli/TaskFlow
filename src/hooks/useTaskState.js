import { useState, useEffect } from 'react'
import { StorageService } from '../services/storage'

export function useTaskState() {
  const [tasks, setTasks] = useState(() => StorageService.get('tasks') || [])

  useEffect(() => StorageService.set('tasks', tasks), [tasks])

  return { tasks, setTasks }
}
