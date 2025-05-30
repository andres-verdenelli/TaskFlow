import { Trash2, CircleCheck, Circle } from 'lucide-react'
import { useTodo } from '../hooks/useTodo'

export default function Task({ task }) {
  const { deleteTask, renameTask, toggleTaskCompletion, isTaskCompleted } =
    useTodo()

  return (
    <>
      <li className='flex items-center gap-2 p-6'>
        <div onClick={() => toggleTaskCompletion(task.id)}>
          {isTaskCompleted(task.id) ?
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
      </li>
    </>
  )
}
