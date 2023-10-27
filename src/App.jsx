import Main from './components/Main'
import Footer from './containers/Footer'
import Header from './containers/Header'
import GlobalStyle, { Container } from './styles'

import { useCallback, useRef } from 'react';
import { toPng } from 'html-to-image';

function App() {

  const ref = useRef(null)

  const saveImage = useCallback(() => {
    if (ref.current === null) {
        return
    }

    toPng(ref.current, { cacheBust: true, })
        .then((dataUrl) => {
            const link = document.createElement('a')
            link.download = 'My-Avatar.png'
            link.href = dataUrl
            link.click()
        })
        .catch((err) => {
            console.log(err)
        })
}, [ref])

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header saveButtonAction={saveImage} />
        <Main refHandler={ref} />
        <Footer />
      </Container>
    </>
  )
}

export default App