import React from 'react';
import './Friend.css'
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    const {name,email,username,id} = friend
    return (
        <div className='friend'>
            <h3>name: {name}</h3>
            <h4>mail: {email} </h4>
            <h5>user name :<Link to={`/friend/${id}`}> {username} </Link> </h5>
        </div>
    );
};

export default Friend;