
import { getCommentsById } from "../utils/api";
import { postComment } from "../utils/api";
import { useState, useEffect } from "react";
import CommentCard from "./CommentCard";

const Comments = (props) => {
const {article_id, user} = props;
const [isLoading, setIsLoading] = useState(true);
const [comments, setComments] = useState([]);
const [body, setBody] = useState('');
const [deletedComment, setDeletedComment] = useState(false);

const [comment, setComment] = useState({});
const [err, setErr] = useState(null);

const submitHandler = (event) => {
   setErr(null)
    event.preventDefault();
  
    setBody('')
   
    postComment(article_id, user, body)
    .then((res) => {
        setComment(res.data.comment)
        alert("Your comment was posted. Congrats!")
    })
    .catch(() => {
        setErr("Somethimg went wrong. Check your username and fill out all fields")
    })
}

const bodyHandler = (event) => {
   setBody(event.target.value);
}

useEffect(() => {
    setIsLoading(true);
    getCommentsById(article_id).then(({comments}) => {
        setComments(comments)
        setIsLoading(false);
    })
}, [article_id, comment, err, deletedComment]);


if (isLoading) {
    return <p className="Loading">Loading...</p>
} 

return (
    <section className='Comments_Page'>
    <form className="Add_Comment" onSubmit={submitHandler}>
        <fieldset>
          <legend>Add new comment </legend>

          <label htmlFor="username">Username </label>
          <input
            type="text"
            id="username"
            name="username"
            value={user}
            readOnly
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
            value={body}
            onChange={bodyHandler}
            required
          ></textarea>
          <br />
          <p id="err"> {err !== null ? err : ''}</p>
          <br />
          <br />

          <input className="Add_Comment_Button" type="submit" value="Submit"></input>
        </fieldset>
      </form>
<ul className="Comments_List">
        
        {comments.map((comment) => {
            return (
                <CommentCard key={comment.comment_id} {...comment} setComment={setComment} user={user} setDeletedComment={setDeletedComment}/>
            )
     
        })}
    </ul>
    </section>
)
}

export default Comments;