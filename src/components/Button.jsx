export default function Button({
  children,
  variant = 'primary',
  className = '',
  ...rest
}) {
  const baseClasses = 'rounded-lg border-1 px-3 py-1 font-light'
  const variantClasses = {
    primary: 'bg-neutral-800 text-white border-neutral-800',
    secondary: 'bg-zinc-100  border-zinc-200',
    destructive: 'bg-red-700 border-red-700 text-white',
    outline: 'bg-white border-zinc-300',
  }

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${className}`

  return (
    <button
      className={buttonClasses}
      {...rest}
    >
      <div className='flex items-center justify-center'>{children}</div>
    </button>
  )
}
