import { useState } from "react";

function Like() {
    const [likes, setLikes] = useState(0);

    return (
        <div>
            <p>Total Likes: {likes}</p>
            <button onClick={() => setLikes(likes + 1)}>Like</button>
        </div>
    )
}

export default Like