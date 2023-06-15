import './App.css'
import React from 'react'
import ArticleOne from './pages/ArticleOne'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ArticleThree from './pages/ArticleThree'
import ArticleFive from './pages/ArticleFive'

function App() {

  return (
    <>
      <Navbar />
      {/* <ArticleOne /> */}
      {/* <ArticleThree /> */}
      <ArticleFive />
      <Footer />
    </>
  )
}

export default App
