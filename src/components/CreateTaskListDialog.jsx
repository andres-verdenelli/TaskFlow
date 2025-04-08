import { useEffect, useState } from 'react'
import { useLists } from '../hooks/useLists'
import { useTaskView } from '../hooks/useTaskView'
import { VIEW_TYPES } from '../constants/viewTypes'
import { COLORS } from '../constants/colors'
import { ListPlus, Cog } from 'lucide-react'

//TODO
//[] apretar enter y mandar formulario
//[] autofocus component

//creo que lo de edit mode no es necesario, por defecto es id null, si le paso uno, actua en base
// a ese id, sino esta en createMode

export default function ListDialog({ mode = 'create', listId = null }) {
  const [isOpen, setIsOpen] = useState(false)
  const [listName, setListName] = useState('')
  const [color, setColor] = useState('primary')

  const { setCurrentView } = useTaskView()
  const { createList, updateList, getListById, deleteList } = useLists()

  //Could use listId to check if is onEditMode
  const isEditMode = mode === 'edit'

  useEffect(() => {
    //Why isOpen is needed?
    if (isEditMode && isOpen && listId) {
      const list = getListById(listId)
      setListName(list.name)
      setColor(list.color)
    }
  }, [isOpen, isEditMode, listId, getListById])

  const handleOpen = () => {
    setIsOpen(true)
  }
  const handleClose = () => {
    setIsOpen(false)
  }
  const handleSubmit = () => {
    //esta especie de catch se puede mejorar
    if (!listName.trim()) {
      handleClose()
      return
    }
    if (isEditMode) {
      updateList(listId, { name: listName, color })
    }
    if (!isEditMode) {
      createList(listName, color)
    }
    handleClose()

    setListName('')
    setColor('primary')
  }

  const handleDelete = () => {
    deleteList(listId)
    setCurrentView({ type: VIEW_TYPES.ALL, listId: null })
    handleClose()
  }

  return (
    <>
      <button
        className='flex rounded-lg border-1 bg-gray-200 p-2'
        onClick={handleOpen}
      >
        {!isEditMode && 'Create List'}
        {isEditMode ?
          <Cog />
        : <ListPlus className='ml-2' />}
      </button>
      {isOpen && (
        <div className='fixed inset-0 z-50 flex'>
          <div
            className='fixed inset-0 z-51 bg-black opacity-15'
            onClick={handleClose}
          ></div>
          <div className='z-52 bg-white p-4 px-6'>
            <div>
              <h1 className='text-lg font-bold'>
                {isEditMode ? 'Edit List' : 'Create List'}
              </h1>
            </div>
            <div>
              <input
                className='rounded-md border-1 p-2'
                type='text'
                name=''
                id=''
                placeholder='List Name'
                value={listName}
                onChange={e => setListName(e.target.value)}
              />
            </div>
            <div>
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
            </div>
            <div>
              {isEditMode && (
                <button
                  type='button'
                  onClick={handleDelete}
                  className='border-1 border-red-600'
                >
                  Delete
                </button>
              )}
              <button
                className='border-1'
                onClick={handleClose}
                type='button'
              >
                Cancel
              </button>
              <button
                className='border-1'
                onClick={handleSubmit}
              >
                {isEditMode ? 'Save' : 'Create'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
