import { useState } from 'react'
import { useLists } from '../hooks/useLists'
import { useTaskView } from '../hooks/useTaskView'
import { VIEW_TYPES } from '../constants/viewTypes'
import { COLORS } from '../constants/colors'
import { Cog } from 'lucide-react'
import Button from './Button'

//TODO
//[] apretar enter y mandar formulario
//[] autofocus component

//creo que lo de edit mode no es necesario, por defecto es id null, si le paso uno, actua en base
// a ese id, sino esta en createMode

export default function TaskListForm({ setTaskListDialogOpen }) {
  const [listName, setListName] = useState('')
  // const [color, setColor] = useState('blue')

  const isEditMode = false

  const { setCurrentView } = useTaskView()
  const { createList, updateList, getListById, deleteList } = useLists()

  const handleClose = () => {
    setTaskListDialogOpen(false)
  }
  const handleSubmit = () => {
    createList(listName)
    setTaskListDialogOpen(false)
  }

  const handleDelete = () => {}

  return (
    <>
      <div
        className='fixed inset-0 z-51 bg-black opacity-15'
        onClick={handleClose}
      ></div>
      <div className='fixed top-1/2 left-1/2 z-52 -translate-x-1/2 -translate-y-1/2'>
        <div className='flex flex-col rounded-xl bg-white p-4 px-6'>
          <div className='mb-4'>
            <h1 className='text-lg font-bold'>
              {isEditMode ? 'Edit List' : 'Create List'}
            </h1>
          </div>
          <div>
            <label
              htmlFor=''
              className='text-sm font-bold'
            >
              List Name
            </label>
          </div>
          <div className='mb-4'>
            <input
              className='rounded-md border-1 p-2 focus:outline-none'
              type='text'
              name=''
              id=''
              placeholder='List Name'
              value={listName}
              onChange={e => setListName(e.target.value)}
            />
          </div>
          {/* <div className='mb-4'>
            <label htmlFor='pet-select'>Choose a color:</label>
            <select
              className='border-1'
              name='color'
              id='color-select'
              onChange={e => setColor(e.target.value)}
            >
              {COLORS.map(color => (
                <option
                  key={color.value}
                  value={color.value}
                >
                  {color.label}
                </option>
              ))}
            </select>
          </div> */}
          <div className='flex justify-end gap-2'>
            {isEditMode && (
              <Button
                type='button'
                onClick={handleDelete}
                className='border-1 border-red-600'
              >
                Delete
              </Button>
            )}
            <Button
              variant='outline'
              onClick={handleClose}
              type='button'
            >
              Cancel
            </Button>
            <Button onClick={handleSubmit}>
              {isEditMode ? 'Save' : 'Create'}
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
