

const ArticleCard = (props) => {
   const {title, topic, author, votes} = props;
return ( <div className="Article_Card">
    <p>Title: {title}</p>
    <p>Topic: {topic}</p>
    <p>Author: {author}</p>
     <div>
        <button>
            Like
        </button>
     </div>
     <p>Current likes: {votes}</p>
     <div>
        <button>
            Dislike
        </button>
     </div>

</div>
)
}


export default ArticleCard;