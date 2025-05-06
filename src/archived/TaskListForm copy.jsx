import { useState } from 'react'
import { useLists } from './useLists'
import { Trash } from 'lucide-react'
import Button from '../components/Button'

//TODO
//[] apretar enter y mandar formulario
//[] autofocus component

//creo que lo de edit mode no es necesario, por defecto es id null, si le paso uno, actua en base
// a ese id, sino esta en createMode

export default function TaskListForm({ setTaskListFormOpen, listId = null }) {
  const isEditMode = listId !== null
  const { createList, updateList, deleteList, getListNameById } = useLists()

  const [listName, setListName] = useState(
    isEditMode ? getListNameById(listId) : '',
  )

  const handleSubmit = () => {
    if (isEditMode) {
      updateList(listId, { name: listName })
    } else {
      createList(listName)
    }
    handleClose()
  }

  const handleDelete = () => {
    deleteList(listId)
    handleClose()
  }

  const handleClose = () => {
    setTaskListFormOpen(false)
  }

  return (
    <>
      <div
        className='fixed inset-0 z-51 bg-black opacity-15'
        onClick={handleClose}
      ></div>
      <div className='fixed top-1/2 left-1/2 z-52 -translate-x-1/2 -translate-y-1/2'>
        <div className='flex flex-col rounded-xl bg-white p-4 px-6'>
          <div className='mb-2 flex justify-between'>
            <div className=''>
              <h1 className='text-lg font-bold'>
                {isEditMode ? 'Edit List' : 'Create List'}
              </h1>
            </div>
            {isEditMode && (
              <button
                onClick={handleDelete}
                className='rounded-md p-1 text-red-700 hover:bg-red-50'
              >
                <Trash />
              </button>
            )}
          </div>
          <div className='mb-1'>
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
