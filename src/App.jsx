import { useEffect, useState } from 'react'
import './App.css'
import TaskList from './components/TaskList'

function App() {
  const [taskList, setTaskList] = useState(() => {
    const taskList = localStorage.getItem('taskList')
    return taskList ? JSON.parse(taskList) : []
  })

  useEffect(() => {
    localStorage.setItem('taskList', JSON.stringify(taskList))
  }, [taskList])

  const createList = () => {
    const taskListName = document.getElementById('inputTextListName').value
    const newTaskList = {
      name: taskListName,
      id: crypto.randomUUID(),
    }
    if (taskListName !== '') {
      setTaskList([...taskList, newTaskList])
      document.getElementById('inputTextListName').value = ''
    }
  }

  const deleteList = id => {
    setTaskList(taskList.filter(taskList => taskList.id !== id))
  }

  return (
    <>
      <h1>To do List</h1>
      <button onClick={createList}>Create new List</button>
      <input
        type='text'
        name=''
        id='inputTextListName'
        placeholder='Insert List Name'
      />
      <br />
      <br />
      <br />
      <br />
      {/* <TaskList
        name='Personal'
        id='mone'
        Z
        deleteList={deleteList}
      />
      <TaskList
        name='Hola'
        id='mone2'
        deleteList={deleteList}
      />
      <TaskList
        name='Hola'
        id='mone3'
        deleteList={deleteList}
      /> */}
      {taskList.map(taskList => (
        <TaskList
          name={taskList.name}
          id={taskList.id}
          key={taskList.id}
          deleteList={deleteList}
        />
      ))}
    </>
  )
}

export default App
