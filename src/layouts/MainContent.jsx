import Task from '../components/Task'
import { CreateTaskDialog } from '../components/CreateTaskDialog'
import { useTaskView } from '../hooks/useTaskView'

export default function MainContent() {
  const { visibleTasks } = useTaskView()

  return (
    <div className='grow'>
      <ul>
        {visibleTasks.map(task => (
          <Task
            task={task}
            key={task.id}
          />
        ))}
      </ul>
      <CreateTaskDialog />
    </div>
  )
}
