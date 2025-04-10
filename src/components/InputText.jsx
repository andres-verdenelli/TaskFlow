export default function InputText(props) {
  return (
    <input
      className='rounded-md border-1 border-zinc-300 px-2 py-1 outline-zinc-400 focus:outline'
      type='text'
      {...props}
    />
  )
}
