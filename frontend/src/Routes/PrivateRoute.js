import React from "react";
import { Route , Redirect } from "react-router-dom";
import Navs from "../Components/Nav";

function isLogin() {
    return localStorage.getItem('user')? true :false;
}

const PrivateRoute = ({component:Component , ...rest })=>{
    return(
        <Route {...rest} render={props =>(
            isLogin() ?
            <div><Navs /><Component {...props} /></div>
            : <Redirect to="/login" />
        )} />
    );
}

export default PrivateRoute;