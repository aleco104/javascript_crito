import React from 'react'
import Header from '../components/Header'
import NewsArticles from '../components/NewsArticles'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'
import NewsPageGrid from '../components/NewsPageGrid'
import '../css/News.css'

const News = () => {
  return (
    <>
      <Header/>
      <main>
        <NewsArticles/>
        <NewsPageGrid/>
        <Newsletter/>
      </main>
      <Footer/>
    </>
  )
}

export default News