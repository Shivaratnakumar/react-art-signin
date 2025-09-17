
import { useState } from "react";
export default function DynamicInlineStyle() {
    const [color, setColor] = useState("white");

    function handleYesClick(){
        setColor("green");
    }

    function handleNoClick(){
        setColor("red");
    }

    return (
        <div id="app">
            <h1 style={{ color: color }}>CSS is great!</h1>
            <menu>
                <li>
                <button onClick={handleYesClick}>Yes</button>
                </li>
                <li>
                <button onClick={handleNoClick}>No</button>
                </li>
            </menu>
        </div>
    )
}