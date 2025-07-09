import { useState } from "react"

function Email() {
    const [email, setEmail] = useState('');

    return (
        <>
            <label >
                Enter your Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <p>Subscribed email: {email}</p>
        </>
    )
}

export default Email