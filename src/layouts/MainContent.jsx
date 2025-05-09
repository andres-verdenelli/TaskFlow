import Task from '../components/Task'
import { useTaskView } from '../hooks/useTaskView'
import { useState } from 'react'
import { TaskForm } from '../components/TaskForm'
import { Plus } from 'lucide-react'

export default function MainContent() {
  const { getVisibleTasks } = useTaskView()
  const [isTaskFormOpen, setTaskFormOpen] = useState(false)

  return (
    <div className='grow'>
      <ul>
        {getVisibleTasks().length === 0 && (
          <li className='mt-4 flex items-center justify-center text-gray-500'>
            This list has no tasks yet
          </li>
        )}
        {getVisibleTasks().map(task => (
          <Task
            task={task}
            key={task.id}
          />
        ))}
      </ul>
      <button
        className='absolute right-4 bottom-4 rounded-full bg-black p-2 text-white'
        onClick={() => setTaskFormOpen(true)}
      >
        <Plus />
      </button>
      {isTaskFormOpen && <TaskForm setTaskFormOpen={setTaskFormOpen} />}
    </div>
  )
}
