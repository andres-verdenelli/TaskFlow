import { ThemeProvider, createTheme } from '@mui/material'

const theme = createTheme()

export function ThemeContext({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
