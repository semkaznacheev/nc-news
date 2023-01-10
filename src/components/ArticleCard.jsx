import { Link } from "react-router-dom";

const ArticleCard = (props) => {
   const {title, topic, author, votes, article_id} = props;
return ( <li className="Article_Card">
    <p><b>Title: </b> {title}</p>
    <p><b>Topic: </b> {topic}</p>
    <p><b>Author: </b>{author}</p>
    <p><b>Current likes: </b> {votes}</p>
     <button>
            Like
        </button>
        <br/>
        <button>
            Dislike
        </button>
        <br/>
        <button className="Readmore_button">
        <Link className="Link_read_more"to={`/articles/article/${article_id}`}> Read more </Link>
        </button>
        
</li>
)
}


export default ArticleCard;