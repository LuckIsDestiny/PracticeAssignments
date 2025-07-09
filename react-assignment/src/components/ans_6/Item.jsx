import { useState } from "react"

function Item() {
    const [items, setItems] = useState(["Bread", "Milk", "Eggs"]);
    return (
        <ul>
            {items.map((item, index) => (<li key={index}>{item}</li>))}
        </ul>
    )
}

export default Item