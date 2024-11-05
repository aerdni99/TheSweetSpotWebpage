// Like Button for my page

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