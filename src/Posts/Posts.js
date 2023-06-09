import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Posts = () => {
    const posts = useLoaderData()
    console.log(posts);
    return (
        <div>
            <h1>user posts page </h1>
            {/* <h3> {posts.title} </h3> */}
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
    );

};

export default Posts; 