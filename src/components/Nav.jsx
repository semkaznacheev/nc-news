import { Link } from "react-router-dom";


const Nav = () => {
    return (
    <nav className="Nav">
        <button className="Nav_Buttons"><Link className="Nav_Buttons" to="/articles"> All Articles</Link></button>
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