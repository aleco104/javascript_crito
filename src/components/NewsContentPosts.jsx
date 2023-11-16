import React from 'react'
import { useArticle } from './ArticleContext'
import { Link } from 'react-router-dom'

const NewsContentPosts = () => {
    const {articleData}  = useArticle()

    return (
        <div className="news-content-posts">
            <div className="title">
                <h3><span>Rec</span>ent Posts</h3>
            </div>
            {
                articleData.map((article, index) => (
                index <= 3 ? <div className="post-details" id={`post${index}`} key={article.id}>
                    <Link to={`/newsdetails/${article.id}`}>{article.title}</Link>
                    <p className="post-details-date"> {new Date(article.published).toLocaleDateString('en-GB', {month: 'short'})} {new Date(article.published).toLocaleDateString('en-GB', {day: 'numeric'})}, {new Date(article.published).toLocaleDateString('en-GB', {year: 'numeric'})} </p>
                </div> : null   
            ))
            }
        </div>
    )
}

export default NewsContentPosts