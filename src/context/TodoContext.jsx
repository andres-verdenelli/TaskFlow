const { createContext } = require('react')

export const TodoContext = createContext(null)

export function TodoProvider({ children }) {
  const value = {}
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}
