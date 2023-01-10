import {useState, useEffect} from "react";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";


const ArticlesList = () => {
    
const [isLoading, setIsLoading] = useState(true);
const [articles, setArticles] = useState([])

useEffect(() => {
    setIsLoading(true);
    getArticles().then(({articles}) => {
        setArticles(articles)
        setIsLoading(false)
    })
}, []);


if (isLoading) {
    return <p className="Loading">Loading...</p>
} 

return (
    <ul className="Article_List">
        {articles.map((article) => {
            
            return (
                <ArticleCard
                key={article.article_id}
                {...article}
                />
            )
        })}
    </ul>
  
)

}



export default ArticlesList;