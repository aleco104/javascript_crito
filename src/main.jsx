import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/index.css'
import Home from './views/Home'
import Contact from './views/Contact'
import NotFound from './views/NotFound'
import News from './views/News'
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import NewsDetails from './views/NewsDetails'
import ScrollToTop from './utils/ScrollToTop'
import { ArticleProvider } from './components/ArticleContext'
import { ToastContainer } from 'react-toastify'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> 
      <ArticleProvider>
        <ScrollToTop/>
        <ToastContainer/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/news' element={<News/>} />
          <Route path='/newsdetails/:id' element={<NewsDetails/>} />          
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </ArticleProvider>
    </BrowserRouter>
  </React.StrictMode>
)
