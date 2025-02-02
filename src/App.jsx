import './App.css'
import Sidebar from './components/Sidebar'
import Task from './components/Task'
import styles from './styles/App.module.css'
import { useState, useEffect } from 'react'
// import Typography from '@mui/material/Typography'

function App() {
  const [tasks, setTasks] = useState(() => {
    const tasksLocalStorage = localStorage.getItem('task')
    return tasksLocalStorage ? JSON.parse(tasksLocalStorage) : []
  })
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = newTask => {
    setTasks([...tasks, newTask])
  }

  const deleteTask = newTask => {
    const newTasks = tasks.filter(task => {
      return task.id !== newTask.id
    })
    setTasks(newTasks)
  }

  const [taskList, setTaskList] = useState(() => {
    const taskListLocalStorage = localStorage.getItem('taskListDELETEME')
    return taskListLocalStorage ? JSON.parse(taskListLocalStorage) : []
  })
  //guardar en localStorage cualquier cambio en las listas
  useEffect(() => {
    localStorage.setItem('taskListDELETEME', JSON.stringify(taskList))
  }, [taskList])
  //taskList Methods
  const createTaskList = name => {
    const newTaskList = {
      name: name,
      isSelected: false,
      tasks: [],
      id: crypto.randomUUID(),
    }
    setTaskList([newTaskList, ...taskList])
  }
  const deleteTaskList = id => {
    setTaskList(taskList.filter(taskList => taskList.id !== id))
  }
  const selectTaskList = id => {
    setTaskList(
      taskList.map(taskList => {
        if (taskList.id === id) {
          return { ...taskList, isSelected: true }
        } else {
          return { ...taskList, isSelected: false }
        }
      })
    )
  }

  const handleClick = () => {
    const userInput = prompt('Please enter Task name: ')
    const newTask = createTask(userInput)
    pushTaskToSelectedTaskList(newTask)
  }

  const createTask = name => {
    return {
      name: name,
      id: crypto.randomUUID(),
      date: Date.now(),
      isChecked: false,
    }
  }

  const pushTaskToSelectedTaskList = task => {
    setTaskList(
      taskList.map(taskList => {
        if (taskList.isSelected === true) {
          const newTasks = taskList.tasks
          newTasks.push(task)
          return { ...taskList, newTasks }
        } else {
          return taskList
        }
      })
    )
  }

  return (
    <>
      <header className={styles.header}>
        <h1>To Do List App</h1>
      </header>
      <div className={styles.contentContainer}>
        <div className={styles.sideBarContainer}>
          <Sidebar
            createTaskList={createTaskList}
            deleteTaskList={deleteTaskList}
            taskList={taskList}
            selectTaskList={selectTaskList}
          />
        </div>
        <div className={styles.mainContentContainer}>
          <button onClick={handleClick}>create task</button>
          <ul>
            {taskList
              .find(taskList => taskList.isSelected)
              .tasks.map(task => (
                <Task
                  key={task.id}
                  text={task.name}
                  isChecked={task.isChecked}
                />
              ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
