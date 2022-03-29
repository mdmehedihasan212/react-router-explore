import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = ({ friend }) => {
    // console.log(friend);
    const navigate = useNavigate();
    const { name, username, id } = friend;

    const ClickBtn = () => {
        const path = `/friend/${id}`;
        navigate(path)
    }
    return (
        <div>
            <h2>{name}</h2>
            <Link to={`/friend/${id}`}>Show Id</Link>
            <button onClick={ClickBtn}>{username} Id: {id}</button>
        </div>
    );
};

export default Friend;