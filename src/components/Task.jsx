import { useState } from 'react'

export default function Task({
  text: initialText,
  isChecked: initialCheckeStatus,
  date,
}) {
  const [isChecked, setIsChecked] = useState(initialCheckeStatus)
  const [text, setText] = useState(initialText)
  return (
    <li>
      <input
        type='checkbox'
        name=''
        id=''
        checked={isChecked}
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
