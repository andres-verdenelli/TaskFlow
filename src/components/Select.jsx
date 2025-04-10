export default function Select({ children, value, onChange, ...restProps }) {
  return (
    <select
      className='rounded-md border-1 border-zinc-300 px-2 py-1 outline-zinc-400 focus:outline'
      value={value}
      onChange={onChange}
      {...restProps}
    >
      {children}
    </select>
  )
}
