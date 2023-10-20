import AvatarContainer from './containers/AvatarContainer'
import Header from './containers/Header'
import ItemsMenu from './containers/ItemsMenu'
import GlobalStyle, { Container, Main } from './styles'

function App() {

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <Main>
          <ItemsMenu />
          <AvatarContainer />
        </Main>
      </Container>
    </>
  )
}

export default App