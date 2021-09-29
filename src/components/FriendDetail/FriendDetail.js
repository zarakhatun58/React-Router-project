import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';



const FriendDetail = () => {
    const { friendId } = useParams();
    const [friend, setFriend] = useState({});
    const history = useHistory();

    useEffect(() => {

        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))

    }, []);

    const handleClick = () => {
        history.push('/friend');
    }

    return (
        <div>
            <h2>Friend Detail:{friendId}</h2>
            <h1> {friend.name}</h1>
            <h2> {friend.phone}</h2>
            <h4>{friend.website}</h4>
            <p>Works at:{friend.company?.name}</p>
            <button onClick={handleClick}> See all friends</button>
        </div>
    );
};

export default FriendDetail;