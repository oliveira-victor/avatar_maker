import GlobalStyle, { MainContainer, Wrapper } from './styles'
import Header from "./containers/Header"
import SideA from './containers/SideA'
import SideB from './containers/SideB'
import Footer from './containers/Footer'

function App() {

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <MainContainer>
          <SideA />
          <SideB />
        </MainContainer>
        <Footer />
      </Wrapper>
    </>
  )
}

export default App
