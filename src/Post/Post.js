import React from 'react';
import './Post.css'
import { Link, useNavigate } from 'react-router-dom';
const Post = ({ post }) => {
    const { title, body, id } = post
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(`/post/${id}`)
    }
    return (
        <div className='post'>
            <h1>{id}</h1>
            <p> {title} </p>
            <p> <small> {body} </small></p>

            <Link to={`/friend/${id}`}>show more more detail 3</Link>

            <Link to={`/post/${id}`}>
                <button>Show Details </button>
            </Link>
            <button onClick={handleNavigate}>SHow more details</button>

        </div>
    );

}
export default Post;