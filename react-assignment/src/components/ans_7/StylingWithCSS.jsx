import { useState } from "react"
import Styles from "./Button.module.css"

function StylingWithCSS() {
    const [isSubscribed, setIsSubscribed] = useState(false);
    return (
        <>
            <h1 style={{ color: 'teal', textAlign: 'center' }}>Join Our Newsletter</h1>
            <button className={Styles.ctaButton} onClick={() => setIsSubscribed(!isSubscribed)}>Subscribe</button>
            <p>{isSubscribed ? "Subscribed" : "Not Subscribed"}</p>
        </>
    )
}

export default StylingWithCSS