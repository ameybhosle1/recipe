import React from "react";
import { Link } from "react-router-dom";
import Context from "../Helper/Context";


const Posts = ()=>{
    // console.log(posts);
    return(
        <Context.Consumer>
            {(context) => (
                context.data.map(data1 =>(
                <Link to={`/view/${data1.userId}`} >
                    <div>
                        {/* <h1>Post {}</h1> */}
                        <h3>{data1.title}</h3>
                    </div>
                </Link>
            ))
            )}
        </Context.Consumer>
    );
}
export default Posts;