import { useTasks } from '../hooks/useTasks'
import { Trash2, PenLine } from 'lucide-react'

export default function Task({ task }) {
  const { deleteTask, renameTask, checkTask } = useTasks()
  return (
    <>
      <div className='flex'>
        <input
          type='checkbox'
          checked={task.isDone}
          onChange={() => checkTask(task.id)}
        />
        <input
          type='text'
          onChange={e => renameTask(task.id, e.target.value)}
          value={task.name}
        />
        <div onClick={() => deleteTask(task.id)}>
          <Trash2 />
        </div>
        <div>
          <PenLine />
        </div>
      </div>
    </>
  )
}
