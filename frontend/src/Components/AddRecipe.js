import axios from "axios";
import React, { useState } from "react";

const AddRecipe = ()=>{
    const [title , setTitle] = useState("")
    const [desc , setDesc] = useState("")
    const [image , setImage] = useState()
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const datas = new FormData();
        datas.append("title",title);
        datas.append("token",localStorage.getItem('user'));
        datas.append('desc' , desc);
        datas.append('avatar' , image);
        console.log(datas);
        var {data} = await axios.post('http://localhost:1001/recipe/add',datas)
        console.log(image);
        if(data.msg){
            console.log("IT WORKED")
            window.location = '/';
        }else{
            alert("SOMETHING WENT WRONG REFRESH THE PAGE")
        }
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input name="title" value={title} onChange={e => setTitle(e.target.value)} required />
                <input name="desc" value={desc} onChange={e => setDesc(e.target.value)} required />
                <input type="file" name="avatar" accept=".jpg" onChange={e => setImage(e.target.files[0])} required />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default AddRecipe;