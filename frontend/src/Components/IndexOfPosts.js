import React from "react";

const IndexOfPosts = ({posts})=>{
    var arrayofIndex = [];
    const lenof = (posts.length)/10;
    for (let index = 1; index < lenof; index++) {
        arrayofIndex.push(index);
    }
    // const nnn = () =>{
    //     for
    // }
    return(
        <div>
            <ol>
                {}
            </ol>
        </div>
    );
}
export default IndexOfPosts;