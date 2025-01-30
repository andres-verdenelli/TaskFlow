import { useEffect, useState } from 'react'

export default function Task({
  text: initialText,
  isChecked: initialCheckeStatus,
  date,
  deleteTask,
  updateTask,
}) {
  const [isChecked, setIsChecked] = useState(initialCheckeStatus)
  const [text, setText] = useState(initialText)

  useEffect(() => {
    updateTask({ text, isChecked, date: date })
  }, [text, isChecked])
  return (
    <li>
      <input
        type='checkbox'
        name=''
        id=''
        checked={isChecked}
        onChange={e => setIsChecked(e.target.checked)}
      />
      <input
        type='text'
        name=''
        id=''
        value={text}
        onChange={e => setText(e.target.value)}
      ></input>
      <button onClick={() => deleteTask({ date })}>Delete</button>
    </li>
  )
}
