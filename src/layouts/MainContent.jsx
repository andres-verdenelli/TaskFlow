import Task from '../components/Task'
import { CreateTaskDialog } from '../components/CreateTaskDialog'
import { useTaskView } from '../hooks/useTaskView'

export default function MainContent() {
  const { visibleTasks } = useTaskView()

  return (
    <div className='grow'>
      <li>
        {visibleTasks.map(task => (
          <Task
            task={task}
            key={task.id}
          />
        ))}
      </li>
      <CreateTaskDialog />
    </div>
  )
}
