
import { getCommentsById } from "../utils/api";
import { useState, useEffect } from "react";


const Comments = (props) => {
const {article_id} = props;
const [isLoading, setIsLoading] = useState(true);
const [comments, setComments] = useState([])

useEffect(() => {
    setIsLoading(true);
    getCommentsById(article_id).then(({comments}) => {
        setComments(comments)
        setIsLoading(false)
    })
}, [article_id]);

if (isLoading) {
    return <p className="Loading">Loading...</p>
} 

return (
<ul className="Comments_List">
        {comments.map((comment) => {
            
            return (
                <li className="Comment_Card" key={comment.comment_id}>
                <p><b>Author: </b> {comment.author}</p>
                <p><b>Published: </b>{comment.created_at}</p>
                <p><b>Comment: </b> {comment.body}</p>
                <p><b>Current likes: </b> {comment.votes}</p>
                <button> Like </button>
                <br/>
                <button> Dislike </button>
                </li>
            )
        })}
    </ul>
)
}

export default Comments;