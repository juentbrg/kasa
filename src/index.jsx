import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import Home from './pages/Home'
import Header from './components/Header'
import About from './pages/About'
import Accommodation from './pages/Accommodation'
import Error from './pages/Error'

const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
}
body {
  font-family: 'Montserrat', sans-serif;
  padding: 20px 20px 0 20px;
}
@media all and (min-width: 1100px) {
  body{
    padding: 40px 100px 0px 100px;
  }
}
`

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/accommodation/:id" element={<Accommodation />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
