import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSingleArticle } from "../utils/api";
import  Comments  from "./Comments.jsx";

const SingleArticle = (props) => {
    const {user} = props;
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
          <br/>
          <p><b>Published:  </b> {article.created_at}</p>
          <p><b>Topic:  </b>{article.topic}</p>
          <p><b>Description:  </b>{article.body}</p>
          <p><b>Topic:  </b>{article.topic}</p>
          <p><b>Likes:  </b>{article.votes}</p>
          <p><b>Comments:  </b>{article.comment_count}</p>
          <br/>
          
      <Comments article_id={article_id} user={user}/>
        </section>
        
    )
}



export default SingleArticle;