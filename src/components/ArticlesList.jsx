import {useState, useEffect} from "react";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import image from "../img/pexels-cottonbro-studio-3951353.jpg";
import { useParams } from "react-router-dom";



const ArticlesList = () => {
    
const [isLoading, setIsLoading] = useState(true);
const [articles, setArticles] = useState([]);
const [sortBy, setSortBy] = useState('created_at');
const [order, setOrder] = useState('asc');
const [err, setErr] = useState(null);

const { topic } = useParams();

useEffect(() => {
    setErr(null)
    setIsLoading(true);
    getArticles(topic, sortBy, order).then(({articles}) => {
        setArticles(articles)
        setIsLoading(false)
    })
    .catch((err) => {
        if (err.response.data.msg === "not found") {
            
            setErr("Articles not found. Try to search for existant topic.")
            setIsLoading(false)
        } else {
            setErr("Something went wrong. Try again later.")
            setIsLoading(false)
        }
       
    })
}, [topic, sortBy, order]);

if (isLoading) {
    return (
        <div className="Load_Error_Container">
            <p className="Loading">Loading...</p>
        </div>
    )
} 
if (err) {
    return (
        <div className="Load_Error_Container">
            <p className="Error">{err}</p>
        </div>
    )
}

return (
    <main>
        <section className="Sort_By_Section">
        <label htmlFor="sort_by">sort by:   </label>
           <select id="sort_by" className="Sort_By_1" value={sortBy} onChange={(e) => {
                setSortBy(e.target.value) 
                }}>
                <option value="created_at"> Date </option>
                <option value="votes"> Likes Quantity</option>
                <option value="comment_count" > Comments Quantity</option> 
            </select>
            <label htmlFor="order">order:  </label>
           <select id="order" className="Sort_By_2" value={order} onChange={(e) => {
                setOrder(e.target.value) 
                }}>
                <option value="asc"> Ascending </option>
                <option value="desc"> Descending </option>
            </select>
        </section>
   
    
 
    <ul className="Article_List"  style={{ backgroundImage:`url(${image})`}}>
        {articles.map((article) => {
            
            return (
                <ArticleCard
                key={article.article_id}
                {...article}
                />
            )
        })}
    </ul>
    </main>
  
)

}



export default ArticlesList;