import axios from "axios";
import React, { useEffect } from "react";

const ViewPost = ({match})=>{
    useEffect(()=>{
        async function getPost(){
            var { data } = await axios.post(`http://localhost:1001/view/${match.params.id}`,{'token':localStorage.getItem('user')})
        }
        getPost();
    },[])
}

export default ViewPost;