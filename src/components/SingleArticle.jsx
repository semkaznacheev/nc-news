import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSingleArticle } from "../utils/api";
import  Comments  from "./Comments.jsx";

const SingleArticle = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [article, setArticle] = useState([])

    const {article_id} = useParams();
    useEffect(() => {
        setIsLoading(true);
        getSingleArticle(article_id).then(({article}) => {
            setArticle(article)
            setIsLoading(false)
        })
    }, [article_id]);
    
    
    if (isLoading) {
        return <p className="Loading">Loading...</p>
    } 
    return (
        <section className="Single_Article">
          <h2>{article.title}</h2>
          <p>Published: {article.created_at}</p>
          <p>Topic: {article.topic}</p>
          <p>Description: {article.body}</p>
          <p>Topic: {article.topic}</p>
          <p>Likes: {article.votes}</p>
          <p>Comments: {article.comment_count}</p>
          
      <Comments article_id={article_id}/>
        </section>
        
    )
}



export default SingleArticle;