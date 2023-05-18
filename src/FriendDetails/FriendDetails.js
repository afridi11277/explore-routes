import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData()
    console.log(friend);
    return (
        <div>
            <h3>friend detail her: <h5>{friend.name}</h5></h3>
                <h3>usename will be: {friend.username}</h3>
            <h4>all about friends shows in here </h4>
        </div>
    );
};

export default FriendDetails;
