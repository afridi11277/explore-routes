import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData()
    console.log(post);
    const{id,body,title,userId} = post
    const navigate = useNavigate()

    const handleNavigate = () =>{
        navigate(`/friend/${userId}`)
        
    }
     return (
        <div>
            <h1>details about post: {id}, <br />{body} , <br /> {title}</h1>

             <button onClick={handleNavigate}>  get the author</button>
        </div>
    );
};

export default PostDetails;