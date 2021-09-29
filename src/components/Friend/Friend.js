import React from 'react';
import { Link, useHistory } from 'react-router-dom';


const Friend = (props) => {
    const { id, name, phone, email, website, address } = props.friend;

    const history = useHistory();
    const friendStyle = {
        border: '3px solid red',
        borderRadius: '20px',
        margin: '20px',
    }

    const url = `/friend/${id}`;
    const handleFriendClick = () => {
        history.push(`/friend${id}`)
    }
    return (
        <div style={friendStyle}>
            <h2> I am :{name} {id} </h2>
            <h4> call me:{phone}</h4>
            <h5>visit me :{address.city}</h5>
            <p>mail me :{email} </p>
            <h6> this is site:{website} </h6>
            <Link to={url} > Visit Me</Link>
            <br />
            {/* <Link to={url}> <button> Visit Me</button></Link> */}

            <button onClick={handleFriendClick}> Visit Me2</button>


        </div>
    );
};

export default Friend;