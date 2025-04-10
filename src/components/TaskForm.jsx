import { useState } from 'react'
import { useTasks } from '../hooks/useTasks'
import { useTaskView } from '../hooks/useTaskView'
import Button from './Button'

//implementar mandar formulario con enter
export function TaskForm({ setTaskFormOpen }) {
  const { currentView } = useTaskView()
  const { createTask } = useTasks()

  const [taskName, setTaskName] = useState('')

  const handleClose = () => setTaskFormOpen(false)
  const handleSubmit = () => {
    createTask(taskName, currentView.listId)
    handleClose()
  }

  return (
    <>
      <div className='fixed inset-0 z-50 bg-black opacity-15'></div>
      <div className='fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2'>
        <div className='rounded-xl bg-white p-6'>
          <div className='mb-4'>
            <h1 className='font-bold'>Create new task</h1>
          </div>
          <div className='mb-4'>
            <label htmlFor=''>Task name</label>
            <input
              className='border-1'
              type='text'
              value={taskName}
              onChange={e => setTaskName(e.target.value)}
            />
          </div>
          <div className='mb-4'>
            <label htmlFor=''>List Name</label>
            <select
              className='border-1'
              name='et'
              id=''
            >
              <option>test</option>
              <option>test2</option>
            </select>
          </div>
          <div className='flex justify-end'>
            <Button
              variant='outlined'
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button onClick={handleSubmit}>Create</Button>
          </div>
        </div>
      </div>
    </>
  )
}
