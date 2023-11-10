import React, { useState, useEffect } from 'react'
import ArticleBox from './ArticleBox'
import siteNumber from '../assets/images/Pagination.png'

const NewsPageGrid = () => {

    const [articleData, setArticleData] = useState([]) 

    useEffect(() => { 
        getArticles()
    }, [])

    const getArticles = async () => { 

        const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles?take=9')

        if (result.status === 200)
            setArticleData(await result.json())  
    }

  return (
    <section className="news-page-grid article">
        <div className="container">
            <h2>Our News & Articles</h2>
            <div className="article-bottom">
                <div className="article-bottom-boxes">
                {
                    articleData.map((article) => (
                        <ArticleBox key={article.id} title={article.title} text={article.content} date={new Date(article.published).toLocaleDateString('en-GB', {day: 'numeric'})} month={new Date(article.published).toLocaleDateString('en-GB', {month: 'short'})} image={article.imageUrl} imageAlt="article image" category={article.category} URL={`/newsdetails/${article.id}`} />        
                    ))
                }
                </div>
            </div>
            <div className="site-number">
                <img src={siteNumber}  />
            </div>
        </div>
    </section>
  )
}


export default NewsPageGrid