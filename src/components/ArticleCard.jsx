

const ArticleCard = (props) => {
   const {title, topic, author, votes} = props;
return ( <li className="Article_Card">
    <p>Title: {title}</p>
    <p>Topic: {topic}</p>
    <p>Author: {author}</p>
        <button>
            Like
        </button>
     <p>Current likes: {votes}</p>
        <button>
            Dislike
        </button>
</li>
)
}


export default ArticleCard;