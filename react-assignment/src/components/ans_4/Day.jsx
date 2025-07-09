import { useState } from "react"

function Day() {
    const [isDay, setIsDay] = useState(true);

    return (
        <>
            <button onClick={() => setIsDay(!isDay)}>Switch to {isDay ? "Night" : "Day"} mode</button>
            <p>Current mode: {isDay ? "Day" : "Night"}</p>
        </>
    )
}

export default Day