import GlobalStyle, { MainContainer, Wrapper } from './styles'
import Header from "./containers/Header"
import SideA from './containers/SideA'
import SideB from './containers/SideB'
import Footer from './containers/Footer'
import { Provider } from 'react-redux'
import { store } from './store'

function App() {

  return (
    <Provider store={store}>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <MainContainer>
          <SideA />
          <SideB />
        </MainContainer>
        <Footer />
      </Wrapper>
    </Provider>
  )
}

export default App
