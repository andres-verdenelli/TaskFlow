import { useEffect, useState } from 'react'

export default function Task(props) {
  const [isChecked, setIsChecked] = useState(props.isChecked)
  const [text, setText] = useState(props.text)

  useEffect(() => {
    props.updateTask({ text, isChecked, date: props.date })
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
      <button onClick={() => console.log(props)}>Info</button>
    </li>
  )
}
