import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
 return (

    <header className="Header">
     <Link to="/" className="Header_Link">
       <h1> NC NEWS </h1>
     </Link>
     <div className="Header_User">
      <p> grumpy19 </p>
      <img src="https://vignette.wikia.nocookie.net/mrmen/images/7/78/Mr-Grumpy-3A.PNG/revision/latest?cb=20170707233013" alt="avatar" />
     </div>
    </header>
 )
}


export default Header;