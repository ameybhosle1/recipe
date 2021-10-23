import axios from "axios";
import React, { useEffect, useState } from "react";

const ViewPost = ({match})=>{
    const [postData , setPostData] = useState({})
    useEffect(()=>{
        async function getPost(){
            var { data } = await axios.post(`http://localhost:1001/recipe/view/${match.params.id}`,{'token':localStorage.getItem('user')})
            console.log(data.data);
            setPostData(data.data);
        }
        getPost();
    },[])
    return(
        <div>
            <h1>IT WORKED</h1>
            <h2>Description is {postData.description}</h2>
            <h2>Title is {postData.title}</h2>
            <h2>User is {postData.user}</h2>
            <img height="200px" width="200px" src={`http://localhost:1001/images/${postData.image}`} />
        </div>
    );
}

export default ViewPost;