/*
    LikeButton.js

    This is a component from the next.js tutorial, I'm keeping it here for reference a little longer
*/
'use client';

import { useState } from 'react';

export default function LikeButton() {
    const [likes, setLikes] = useState(0);

    function handleClick() {
        setLikes(likes + 1);
        console.log({likes});
    }

    return <button onClick={handleClick}>Like({likes})</button>
}