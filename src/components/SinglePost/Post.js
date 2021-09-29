import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Post = (props) => {
    const { title, id } = props.post;
    const history = useHistory();

    const handleClick = () => {
        history.push(`/post/${id}`);
    }

    return (
        <div>
            <h2> {title}</h2>
            <Link to={`/post/${id}`}> post Detail</Link> < br />
            <button onClick={handleClick}> Claick To See Detail</button>
        </div>
    );
};

export default Post;