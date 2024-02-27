import { ThemeProvider } from 'styled-components'
import GlobalStyle, { MainContainer, Wrapper } from './styles'
import Header from "./containers/Header"
import SideA from './containers/SideA'
import SideB from './containers/SideB'
import Footer from './containers/Footer'
import { Provider } from 'react-redux'
import { store } from './store'
import lightTheme from './themes/light'
import { useState } from 'react'
import darkTheme from './themes/dark'

function App() {

  const [themeIsDark, setThemeIsDark] = useState(false)

  function switchTheme() {
    setThemeIsDark(!themeIsDark)
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={themeIsDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Wrapper>
          <Header themeIsDark={themeIsDark} />
          <MainContainer>
            <SideA />
            <SideB switchTheme={switchTheme} themeIsDark={themeIsDark} />
          </MainContainer>
          <Footer />
        </Wrapper>
      </ThemeProvider>
    </Provider>
  )
}

export default App
