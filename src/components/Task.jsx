import { useTasks } from '../hooks/useTasks'
import { Trash2, PenLine, CircleCheck, Circle } from 'lucide-react'
import { useState } from 'react'

export default function Task({ task }) {
  const { deleteTask, renameTask, checkTask } = useTasks()
  const [isChecked, setIsChecked] = useState(task.isDone)

  const toggleCheck = () => {
    setIsChecked(prev => !prev)
    checkTask(task.id)
  }
  return (
    <>
      <li className='flex items-center gap-2 p-6'>
        <div onClick={toggleCheck}>
          {isChecked ?
            <CircleCheck />
          : <Circle />}
        </div>
        <div className='grow'>
          <input
            className='w-full border-b-1 border-b-gray-200 focus:border-b-black focus:outline-none'
            type='text'
            onChange={e => renameTask(task.id, e.target.value)}
            value={task.name}
          />
        </div>
        <div
          className='text-gray-400 hover:text-black'
          onClick={() => deleteTask(task.id)}
        >
          <Trash2 />
        </div>
        <div className='text-gray-400 hover:text-black'>
          <PenLine />
        </div>
      </li>
    </>
  )
}
