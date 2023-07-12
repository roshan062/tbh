import styles from './App.module.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ArticleOne from './pages/ArticleOne'
import ArticleThree from './pages/ArticleThree'
import ArticleFour from './pages/ArticleFour'
import ArticleFive from './pages/ArticleFive'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ArticleTwo from './pages/ArticleTwo'
import HomeOne from './pages/HomeOne'
import AboutUs from './pages/AboutUs'
import ArticleHome from './pages/ArticleHome'
import GetInvolved from './pages/GetInvolved'
import Business from './pages/Business'
import Theatre from './pages/Theatre'
import ScrollToTop from './components/ScrollToTop'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path='/' >
          <Route index element={<HomeOne />} />
          <Route path='/articles' element={<ArticleHome />} />
          <Route path='/1' element={<ArticleOne />} />
          <Route path='/2' element={<ArticleTwo />} />
          <Route path='/3' element={<ArticleThree />} />
          <Route path='/4' element={<ArticleFour />} />
          <Route path='/5' element={<ArticleFive />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/get-involved' element={<GetInvolved />} />
          <Route path='/business' element={<Business />} />
          <Route path='/theatre' element={<Theatre />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
