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
          <form>
        <fieldset>
          <legend>Add new comment </legend>

          <label htmlFor="Your name">Your Name :</label>
          <input
            type="text"
            id="your_name"
            name="your_name"
          ></input>
          <br />
          <br />

          <label htmlFor="description">Write you comment here:</label>
          <br />
          <textarea
            name="comment_input"
            id="comment_input"
            rows="4"
            cols="40"
          ></textarea>
          <br />
          <br />
          <br />

          <input type="submit" value="Submit"></input>
        </fieldset>
      </form>
      <Comments article_id={article_id}/>
        </section>
        
    )
}



export default SingleArticle;