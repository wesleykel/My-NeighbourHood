import '../styles/globals.css'
import ThemeContext , {themes} from '../components/theme-context.js'
import { useState } from 'react'


function MyApp({ Component, pageProps }) {
  
  const [theme, setTheme] = useState("light")
  const value ={theme ,setTheme}
  
  
  return( 
    <ThemeContext.Provider value={themes}>
  <Component {...pageProps} />
  </ThemeContext.Provider>
  )
}

export default MyApp
