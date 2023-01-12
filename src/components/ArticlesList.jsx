import {useState, useEffect} from "react";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import image from "../img/pexels-cottonbro-studio-3951353.jpg";
import { useParams } from "react-router-dom";



const ArticlesList = () => {
    
const [isLoading, setIsLoading] = useState(true);
const [articles, setArticles] = useState([]);

const { topic } = useParams();

useEffect(() => {
    setIsLoading(true);
    getArticles(topic).then(({articles}) => {
        setArticles(articles)
        setIsLoading(false)
    })
}, [topic]);


if (isLoading) {
    return <p className="Loading">Loading...</p>
} 

return (
    
 
    <ul className="Article_List"  style={{ backgroundImage:`url(${image})`}}>
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