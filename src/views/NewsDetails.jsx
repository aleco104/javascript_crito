import React from 'react'
import Header from '../components/Header'
import NewsArticles from '../components/NewsArticles'
import Footer from '../components/Footer'
import Article from '../components/Article'
import { useParams } from 'react-router-dom'
import '../css/News.css'
import NewsContent from '../components/NewsContent'

const NewsDetails = () => { 
  const { id } = useParams() //extraherar parametern 

  return (
    <>
      <Header/>
      <main>
        <NewsArticles/>
        <NewsContent id={id}/>
        <Article backgroundColor="grey"/>
      </main>
      <Footer/>
    </>

  )
}

export default NewsDetails