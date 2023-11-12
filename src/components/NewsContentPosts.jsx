import React, { useEffect, useState } from 'react'
import { useArticle } from './ArticleContext'

const NewsContentPosts = () => {
    // const [articleData, setArticleData] = useState([])

    const {articleData}  = useArticle()


    // useEffect(() => {
    //     getArticles()
    // }, [])

    // const getArticles = async() => {
    //     const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles?take=4')

    //     if (result.status === 200){
    //         setArticleData(await result.json())
    //     }
    // }

    return (
        <div className="news-content-posts">
            <div className="title">
                <h3><span>Rec</span>ent Posts</h3>
            </div>

            {
            articleData.map((article, index) => (
            index <= 3 ? <div className="post-details" id={`post${index}`} key={article.id}>
                <p>{article.title}</p>
                <p className="post-details-date"> {new Date(article.published).toLocaleDateString('en-GB', {month: 'short'})} {new Date(article.published).toLocaleDateString('en-GB', {day: 'numeric'})}, {new Date(article.published).toLocaleDateString('en-GB', {year: 'numeric'})} </p>
            </div> : null   
            ))
            }
        </div>
    )
}

export default NewsContentPosts