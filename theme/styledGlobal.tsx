import { ThemeProvider } from "styled-components"
import { theme as themeTailwind } from "../tailwind.config"

const theme = themeTailwind.extend

export default ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}