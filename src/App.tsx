import GlobalStyle, { MainContainer, Wrapper } from './styles'
import Header from "./containers/Header"
import SideA from './containers/SideA'
import SideB from './containers/SideB'

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
      </Wrapper>
    </>
  )
}

export default App
