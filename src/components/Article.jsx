import React, { useState, useEffect } from 'react'
import articleNewsCarousel from '../assets/images/article-news-carousel.svg'
import ArticleBox from '../components/ArticleBox'
import { Link } from 'react-router-dom'

const Article = ({backgroundColor}) => {

    const [articleData, setArticleData] = useState([]) //lagrar informationen

    useEffect(() => { //kör ut informationen
        getArticles()
    }, [])

    const getArticles = async () => { //hämtar ut information från API

        const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles?take=3')

        if (result.status === 200)
            setArticleData(await result.json())
    }

    return (
        <section className={`article ${backgroundColor}`}>
            <div className="container">
                <div className="article-top">
                    <div className="article-top-left">
                        <h6>Article & News</h6>
                        <h2>Get Every Single Articles & News</h2>
                    </div>
                    <div className="article-top-right">
                        <Link to="/news" className="btn-white">Browse Articles<i className="fa-regular fa-arrow-up-right"></i></Link>
                    </div>
                </div>

                <div className="article-bottom">
                    <div className="article-bottom-boxes">
                        {
                            articleData.map((article) => (
                                <ArticleBox key={article.id} title={article.title} text={article.content} date={new Date(article.published).toLocaleDateString('en-GB', {day: 'numeric'})} month={new Date(article.published).toLocaleDateString('en-GB', {month: 'short'})} image={article.imageUrl} imageAlt="article image" category={article.category} URL={`/newsdetails/${article.id}`} />    
                            )) 
                        }
                    </div>

                    <div className="article-bottom-carousel">
                        <img src={articleNewsCarousel} alt="" />
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Article