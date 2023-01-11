import { Link } from "react-router-dom";
import { patchVotesChange } from "../utils/api";
import {useState} from "react";

const ArticleCard = (props) => {
   const { title, topic, author, votes, article_id } = props;
   const [votesChange, setVotesChange] = useState(0);
   
   
 
   const handleVotesChangeInc = () => {
    setVotesChange((currentVotesChange) =>  currentVotesChange + 1);
    patchVotesChange(article_id, 1)
    .catch(() => {
        setVotesChange((currentVotesChange) => currentVotesChange - 1);
    })
   }

   const handleVotesChangeDec = () => {
    setVotesChange((currentVotesChange) =>  currentVotesChange - 1);
    patchVotesChange(article_id, -1)
    .catch(() => {
        setVotesChange((currentVotesChange) => currentVotesChange + 1);
    })
   }
 


return ( <li className="Article_Card">
    <p><b>Title: </b> {title}</p>
    <p><b>Topic: </b> {topic}</p>
    <p><b>Author: </b>{author}</p>
    <p><b>Current likes: </b> {votes + votesChange}</p>
     <button disabled = {votesChange > 0}  onClick={handleVotesChangeInc}>
            Like
        </button>
        <br/>
        <button disabled = {votesChange < 0} onClick={handleVotesChangeDec}>
            Dislike
        </button>
        <br/>
        <button className="Readmore_button" >
        <Link className="Link_read_more"to={`/articles/article/${article_id}`}> Read more </Link>
        </button>
        
</li>
)
}


export default ArticleCard;