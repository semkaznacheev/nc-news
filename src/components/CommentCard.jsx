
const CommentCard = (props) => {
const {comment_id, author, created_at, body, votes} = props;


return (
    <li className="Comment_Card" key={comment_id}>
    <p><b>Author: </b> {author}</p>
    <p><b>Published: </b>{created_at}</p>
    <p><b>Comment: </b> {body}</p>
    <p><b>Current likes: </b> {votes}</p>
    <button> Like </button>
    <br/>
    <button> Dislike </button>
    </li>
)

}
export default CommentCard;