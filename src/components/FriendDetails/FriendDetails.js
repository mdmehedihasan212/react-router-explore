import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
    const [friend, setFriend] = useState({})
    const { friendId } = useParams()
    const { name, address, email, phone } = friend;
    console.log(friend);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        // console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))
    }, [])
    return (
        <div>
            <h1>This is Friends Details</h1>
            <h3>Name: {name}</h3>
            <h4>Phone: {phone}</h4>
            <h4>Email: {email}</h4>
            <h5>City: {address?.city} Geo: {address?.geo.lng}</h5>
        </div>
    );
};

export default FriendDetails;