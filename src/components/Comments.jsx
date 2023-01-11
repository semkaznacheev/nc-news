
import { getCommentsById } from "../utils/api";
import { postComment } from "../utils/api";
import { useState, useEffect } from "react";
import CommentCard from "./CommentCard";

const Comments = (props) => {
const {article_id} = props;
const [isLoading, setIsLoading] = useState(true);
const [comments, setComments] = useState([]);
const [username, setUserName] = useState('');
const [body, setBody] = useState('');
const [comment, setComment] = useState({});
const [err, setErr] = useState(null);

const submitHandler = (event) => {
   setErr(null)
    event.preventDefault();
  
    setComment({
        comment_id: (Date.now()),
        author: username,
        created_at: (new Date()).toString(),
        body: body,
        votes: 0
    })
   
    postComment(article_id, username, body)
    .then(() => {
        
        alert("Your comment was posted. Congrats!")
    })
    .catch(() => {
        setErr("Somethimg went wrong. Check your username and fill out all fields")
    })
}

const usernameHandler = (event) => {
    setUserName(event.target.value)
}

const bodyHandler = (event) => {
   setBody(event.target.value);
}

useEffect(() => {
    
    setIsLoading(true);
    getCommentsById(article_id).then(({comments}) => {
        if (Object.keys(comment).length === 0) {
            setComments(comments)
        } else if (err !== null) {
            setComments(comments)
        } else {
            setComments([comment, ...comments])
        }
        setIsLoading(false);
    })
}, [article_id, comment, err]);


if (isLoading) {
    return <p className="Loading">Loading...</p>
} 

return (
    <section>
    <form className="Add_Comment" onSubmit={submitHandler}>
        <fieldset>
          <legend>Add new comment </legend>

          <label htmlFor="username">Username </label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={usernameHandler}
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
                <CommentCard key={comment.comment_id} {...comment}/>
            )
     
        })}
    </ul>
    </section>
)
}

export default Comments;