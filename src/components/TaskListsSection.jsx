import TaskList from './TaskList'
import { VIEW_TYPES } from '../constants/viewTypes'
import { useTaskView } from '../hooks/useTaskView'
import { useLists } from '../hooks/useLists'

export default function TaskListSection({ setOpenSidebar }) {
  const { lists } = useLists()
  const { currentView, setCurrentView } = useTaskView()
  return (
    <>
      {lists.map(list => (
        <TaskList
          key={list.id}
          name={list.name}
          selected={
            currentView.type === VIEW_TYPES.LIST &&
            currentView.listId === list.id
          }
          onClick={() => {
            setCurrentView({ type: VIEW_TYPES.LIST, listId: list.id })
            setOpenSidebar(false)
          }}
          color={list.color}
        />
      ))}
    </>
  )
}
