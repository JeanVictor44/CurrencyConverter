import { useState } from 'react'
import GlobalStyles from './styles/GlobalStyles'
import Converter from './components/Converter'
import { DefaultTheme,ThemeProvider } from 'styled-components'
import darkTheme from './styles/themes/dark'
import lightTheme from './styles/themes/light'
import Switch from 'react-switch'

const App = () => {
  const [theme, setTheme] = useState<DefaultTheme>(lightTheme)
  
  const toggleTheme = (title:string) => title === 'light' ? setTheme(darkTheme) : setTheme(lightTheme)

  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyles />
        <Switch onChange={() => toggleTheme(theme.title)} checked={theme.title == 'dark'} />
        <h1>Obtenha a taxa de câmbio real</h1>
        <h4>Veja a conversão da sua moeda de forma rápida</h4>
        <Converter />

      </div>
    </ThemeProvider>
  )
}

export default App
