import React from 'react';


const Friend = (props) => {
    const { name, phone, email, website, address } = props.friend;
    const friendStyle = {
        border: '3px solid red',
        borderRadius: '20px',
        margin: '20px',
    }
    return (
        <div style={friendStyle}>
            <h2> I am :{name} </h2>
            <h4> call me:{phone}</h4>
            <h5>visit me :{address.city}</h5>
            <p>mail me :{email} </p>
            <h6> this is site:{website} </h6>

        </div>
    );
};

export default Friend;