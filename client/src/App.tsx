import { RouterProvider } from 'react-router-dom'
import { useAppSelector } from './hooks/useAppSelector'
import { router } from './routes/router'
import { ThemeProvider } from './style/ThemeProvider'
import { darkTheme } from './style/darktheme'
import { lightTheme } from './style/lightTheme'

const App = () => {
  const darkMode = useAppSelector((state) => state.app.isDark)

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
