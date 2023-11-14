import React, { useEffect } from 'react'
import NewsContentPosts from './NewsContentPosts'
import '../css/NewsContent.css'
import { useArticle } from './ArticleContext'

const NewsContent = ({id}) => {

    const {article, getArticle} = useArticle()

    useEffect(() => {
        getArticle(id)
    }, [id]) 

    return (
        <section className="news-content">
            <div className="container">
                <div className="titles">
                    <h2>{article.title}</h2>
                    <div className="titles-bottom">
                        <p>{new Date(article.published).toLocaleDateString('en-GB', {month: 'short'})} {new Date(article.published).toLocaleDateString('en-GB', {day: 'numeric'})}, {new Date(article.published).toLocaleDateString('en-GB', {year: 'numeric'})} </p>
                        <i className="fa-solid fa-circle"></i>
                        <p>{article.category}</p>
                        <i className="fa-solid fa-circle"></i>
                        <p>{article.author}</p>
                    </div>
                </div>
                <div className="news-content-left">
                    <img src={article.imageUrl} />
                    <p>{article.content}</p>
                    <div className="news-category-box">
                        <p>{article.category}</p>
                    </div>
                </div>
                <div className="news-content-right">
                    <div className="news-content-searchfield">
                        <input placeholder="Type to search..."/>
                        <i className="fa-solid fa-magnifying-glass"></i> 
                    </div>
                    <NewsContentPosts/>
                    <div className="news-categories">
                        <h3><span>Cat</span>egories</h3>
                        <div className="news-categories-content">
                            <p>Technology <span>- 20 Posts</span></p>
                            <p>Freelancing <span>- 07 Posts</span></p>
                            <p>Writing <span>- 16 Posts</span></p>
                            <p>Marketing <span>- 11 Posts</span></p>
                            <p>Business <span>- 35 Posts</span></p>
                            <p>Education <span>- 14 Posts</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewsContent