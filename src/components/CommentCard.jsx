import { deleteComment } from "../utils/api";
import { useState } from "react";

const CommentCard = (props) => {
const {comment_id, author, created_at, body, votes, user, setDeletedComment, setComment} = props;
const [err, setErr] = useState(null);

const handleDelete = () => {
setDeletedComment(false)
setErr(null)
setComment({})

deleteComment(comment_id)
.then(() => {
    alert("Your comment was deleted.")
    setDeletedComment(true);

})
.catch(() => {
   setErr('Something went wrong. Try delete it later.')
})
}
return (
    <li className="Comment_Card" key={comment_id}>
    <p><b>Author: </b> {author}</p>
    <p><b>Published: </b>{created_at}</p>
    <p><b>Comment: </b> {body}</p>
    <p><b>Current likes: </b> {votes}</p>
    <button> Like </button>
    <br/>
    <button> Dislike </button>
    {author === user ? <button onClick={handleDelete}> Delete </button> : null}
    <br/>
    <p id="err"> {err !== null ? err : ''}</p>
    <br />
    </li>
)

}
export default CommentCard;