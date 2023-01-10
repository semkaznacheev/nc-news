import { Link } from "react-router-dom";


const Nav = () => {
    return (
    <nav className="Nav">
        <h2>Navigation</h2>
        <Link to="/articles"> All Articles</Link>
       <div className="dropdown">
       <button className="dropbtn">Dropdown</button>
       <div className="dropdown-content">
      </div>
      </div>
      <div className="dropdown">
      <button className="dropbtn">Dropdown</button>
      <div className="dropdown-content">
      </div>
      </div>
    </nav>
    )
}

export default Nav;