import { useRef, useState } from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

import { store } from './store'
import Header from "./containers/Header"
import SideA from './containers/SideA'
import SideB from './containers/SideB'
import Footer from './containers/Footer'

import lightTheme from './themes/light'
import darkTheme from './themes/dark'

import GlobalStyle, { MainContainer, Wrapper } from './styles'

function App() {

  const [themeIsDark, setThemeIsDark] = useState(false)

  function switchTheme() {
    setThemeIsDark(!themeIsDark)
  }

  const ref = useRef<HTMLDivElement>(null);

  const handleCapture = async () => {
    if (ref.current) {
      try {
        const canvas = await html2canvas(ref.current, {
          backgroundColor: 'transparent', // Set the background color to transparent
        });
        canvas.toBlob((blob: Blob | null) => {
          if (blob) {
            saveAs(blob, 'My_Avatar_(by-VFO-Studio).png');
          }
        });
      } catch (error) {
        console.error('Error capturing content:', error);
      }
    }
  };

  return (
    <Provider store={store}>
      <ThemeProvider theme={themeIsDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Wrapper>
          <Header themeIsDark={themeIsDark} handleCapture={handleCapture} />
          <MainContainer>
            <SideA captureContentRef={ref} />
            <SideB switchTheme={switchTheme} themeIsDark={themeIsDark} />
          </MainContainer>
          <Footer />
        </Wrapper>
      </ThemeProvider>
    </Provider>
  )
}

export default App
