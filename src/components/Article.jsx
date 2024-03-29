import React from 'react'
import articleNewsCarousel from '../assets/images/article-news-carousel.svg'
import ArticleBox from '../components/ArticleBox'
import Button from '../generics/Button'
import { useArticle } from './ArticleContext'

const Article = ({backgroundColor}) => {
    const {articleData}  = useArticle()
    
    return (
        <section className={`article ${backgroundColor}`}>
            <div className="container">
                <div className="article-top">
                    <div className="article-top-left">
                        <h6>Article & News</h6>
                        <h2>Get Every Single Articles & News</h2>
                    </div>
                    <div className="article-top-right">
                        <Button color="white" text="Browse Articles" url="/news"/> 
                    </div>
                </div>
                <div className="article-bottom">
                    <div className="article-bottom-boxes"> 
                        {
                            articleData.map((article, index) => (
                                index <=2 ? <ArticleBox key={article.id} title={article.title} text={article.content} date={new Date(article.published).toLocaleDateString('en-GB', {day: 'numeric'})} month={new Date(article.published).toLocaleDateString('en-GB', {month: 'short'})} image={article.imageUrl} imageAlt="article image" category={article.category} URL={`/newsdetails/${article.id}`} /> : null    
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