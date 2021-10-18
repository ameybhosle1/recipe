import React, { useEffect } from "react";
import {  Link } from "react-router-dom";

const Logout = ()=>{
    useEffect(()=>{
        localStorage.clear();
    },[])
    return (
        <div>
            <h1>Logged OUT</h1>
            <Link to="/login">LogiN</Link>
        </div>
    );
}

export default Logout ;