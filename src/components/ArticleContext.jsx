import React, { createContext, useContext, useEffect, useState } from 'react'

const ArticleContext = createContext()

export const useArticle = () => useContext(ArticleContext)

export const ArticleProvider = ({children}) => {
    const [articleData, setArticleData] = useState([])
    const [article, setArticle] = useState({})

    useEffect(() => {
        getArticles()
    }, [])

    const getArticles = async () => { //hämtar ut information från API
        const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles')
        if (result.status === 200)
            setArticleData(await result.json())
    }

    const getArticle = async (id) => { //hämtar informationen
        const result = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/${id}`)
        if (result.status === 200)
            setArticle(await result.json())
    }

    return (
        <ArticleContext.Provider value={{articleData, article, getArticles, getArticle}}>
            {children}
        </ArticleContext.Provider>
    )
}


