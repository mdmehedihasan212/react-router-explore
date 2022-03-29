import React from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
    const { friendId } = useParams()
    return (
        <div>
            <h1>This is Friends Details id: {friendId}</h1>
        </div>
    );
};

export default FriendDetails;