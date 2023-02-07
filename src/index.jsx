import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import Home from './pages/Home'
import Header from './pages/Header'
import About from './pages/About'
import Error from './components/Error'

const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
}
body{
  font-family: 'Montserrat', sans-serif;
  padding: 20px 20px 0 20px;
}
`

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <GlobalStyle />
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
)
