import React from 'react'
import ArticleBox from './ArticleBox'
import siteNumber from '../assets/images/Pagination.png'
import { useArticle } from './ArticleContext'

const NewsPageGrid = () => {

    const {articleData} = useArticle()

  return (
    <section className="news-page-grid article">
        <div className="container">
            <h2>Our News & Articles</h2>
            <div className="article-bottom">
                <div className="article-bottom-boxes">
                {
                    articleData.map((article, index) => (
                        index <= 8 ? <ArticleBox key={article.id} title={article.title} text={article.content} date={new Date(article.published).toLocaleDateString('en-GB', {day: 'numeric'})} month={new Date(article.published).toLocaleDateString('en-GB', {month: 'short'})} image={article.imageUrl} imageAlt="article image" category={article.category} URL={`/newsdetails/${article.id}`} /> : null
                        
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