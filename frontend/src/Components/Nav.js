import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import '../App.css';

function isLogin() {
    return localStorage.getItem('user') ? true : false;
}

const Navs = ()=>{
    return(
        <div>
            <ul className="headerss">
                <Link to="/"><li>Home</li> </Link>
                {isLogin() ? <Link to="/add-recipe"><li>Add Recipe</li> </Link> : <div></div> }
                {/* <Link to="/profile"><li>Profile</li> </Link> */}
                {isLogin() ? <Link to="/profile"><li>Profile</li> </Link> : <div></div> }
                {isLogin() ? <div></div> : <Link to="/login"><li>Login</li> </Link>  }
                {isLogin() ? <Link to="/logout"><li>Logout</li> </Link> : <div></div>  }
            </ul>
        </div>
    );
}
export default Navs