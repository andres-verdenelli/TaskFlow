import { useState } from 'react'
import { useTasks } from '../hooks/useTasks'
import { useTaskView } from '../hooks/useTaskView'
import Button from './Button'
import InputText from './InputText'
import Label from './Label'
import Select from './Select'
import { useLists } from '../hooks/useLists'
import { VIEW_TYPES } from '../constants/viewTypes'

//al apretar enter se manda el formulario pero no agrega la task
//autofocus inputtext

export function TaskForm({ setTaskFormOpen }) {
  const { currentView } = useTaskView()
  const { createTask } = useTasks()
  const { lists } = useLists()

  const [taskName, setTaskName] = useState('')
  const [taskListId, setTaskListId] = useState(
    currentView.type === VIEW_TYPES.LIST ? currentView.listId : lists[0].id,
  )

  const handleClose = () => setTaskFormOpen(false)

  const handleSubmit = () => {
    createTask(taskName, taskListId)
    handleClose()
  }

  const handleSelectChange = e => {
    setTaskListId(e.target.value)
  }

  return (
    <>
      <div
        className='fixed inset-0 z-50 bg-black opacity-15'
        onClick={handleClose}
      ></div>
      <div className='fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2'>
        <div className='rounded-xl bg-white p-6'>
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <h1 className='text-lg font-bold'>Create new task</h1>
            </div>
            <div className='mb-3'>
              <Label htmlFor='task-name-input'>Task name</Label>
              <InputText
                name='task-name-input'
                id='task-name-input'
                value={taskName}
                onChange={e => setTaskName(e.target.value)}
                required
              />
            </div>
            <div className='mb-4'>
              <Label htmlFor='list-select-input'>List</Label>
              <Select
                id='list-select-input'
                name='list-select-input'
                value={taskListId}
                onChange={handleSelectChange}
              >
                {lists.map(list => (
                  <option
                    value={list.id}
                    key={list.id}
                  >
                    {list.name}
                  </option>
                ))}
              </Select>
            </div>
            <div className='flex justify-end gap-2'>
              <Button
                variant='outlined'
                onClick={handleClose}
              >
                Cancel
              </Button>
              <Button type='submit'>Create</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
