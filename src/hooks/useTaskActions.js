import { useTaskState } from './useTaskState'

export function useTaskActions() {
  const { setTasks } = useTaskState()

  const createTask = (name, listId) => {
    const newTask = {
      name: name,
      id: crypto.randomUUID(),
      creationDate: Date.now(),
      isDone: false,
      listId: listId,
    }
    setTasks(prev => [...prev, newTask])
    return newTask
  }
  const deleteTask = id => {
    setTasks(prev => prev.filter(task => task.id !== id))
    return id
  }

  const renameTask = (id, newName) => {
    setTasks(prev =>
      prev.map(task => (task.id === id ? { ...task, name: newName } : task))
    )
    return { id, newName }
  }

  const checkTask = id => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    )
    return id
  }

  return { createTask, deleteTask, renameTask, checkTask }
}
