import Main from './components/Main'
import Footer from './containers/Footer'
import Header from './containers/Header'
import GlobalStyle, { Container } from './styles'

function App() {

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <Main />
        <Footer />
      </Container>
    </>
  )
}

export default App