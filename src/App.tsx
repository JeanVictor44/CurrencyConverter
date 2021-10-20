import { useState } from 'react'
import GlobalStyles from './styles/GlobalStyles'
import Converter from './components/Converter'
import { DefaultTheme,ThemeProvider } from 'styled-components'
import darkTheme from './styles/themes/dark'
import lightTheme from './styles/themes/light'
import Switch from 'react-switch'
import usePersistedState from './utils/usePersistedState'
const App = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme',lightTheme)
  
  const toggleTheme = (title:string) => title === 'light' ? setTheme(darkTheme) : setTheme(lightTheme)
             
  return (
    <div>
      <ThemeProvider theme={theme}>
    
        <GlobalStyles />
        <Switch onChange={() => toggleTheme(theme.title)} 
                checked={theme.title == 'dark'} 
                height={15} width={35} 
                checkedIcon={false}
                uncheckedIcon={false}
                handleDiameter={18}/>
        <h1>Obtenha a taxa de câmbio de qualquer moeda</h1>
        <h4>Veja a conversão da sua moeda de forma rápida</h4>
        <Converter />
        </ThemeProvider>
    </div>
  )
}

export default App
