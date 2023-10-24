import Main from './components/Main'
import Header from './containers/Header'
import GlobalStyle, { Container } from './styles'

function App() {

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <Main />
      </Container>
    </>
  )
}

export default App