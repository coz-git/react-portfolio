import { ThemeProvider } from 'styled-components'
import GlobalStyle from './globalStyle'
import { darkTheme, lightTheme } from './Theme/Themes';
import { Route, Routes } from 'react-router-dom';
import { Main, About, Skills, Work, Blog } from './page'

function App() {
  return <>
    <GlobalStyle />
    <ThemeProvider theme={lightTheme}>
      <Routes>
        <Route exact path='/' element={<Main/>} />
        <Route exact path='/about' element={<About/>} />
        <Route exact path='/blog' element={<Blog/>} />
        <Route exact path='/skill' element={<Skills/>} />
        <Route exact path='/work' element={<Work/>} />
      </Routes>
    </ThemeProvider>
  </>  
}

export default App

