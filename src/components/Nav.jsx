import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../utils/api";

const Nav = () => {
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        getTopics().then(({topics}) => {
            setTopics(topics);
        })
    }, [])

    return (
    <nav className="Nav">
        <button className="Nav_Buttons"><Link className="Nav_Buttons" to="/articles"> ALL ARTICLES</Link></button>
      {topics.map((topic) => {
        return (
            <button className="Nav_Buttons" key={topic.slug}>
           <Link className="Nav_Buttons"
            to={`/articles/topics/${topic.slug}`}>
            {topic.slug.toUpperCase()}
           </Link>
                </button>
        )
      })}
      
       <div className="Button_Box">
       <button className="Nav_Buttons" >Dropdown</button>
       <div className="dropdown-content">
      </div>
      </div>
      <div className="Button_Box">
      <button className="Nav_Buttons">Dropdown</button>
      <div className="dropdown-content">
      </div>
      </div>
    </nav>

    )
}

export default Nav;