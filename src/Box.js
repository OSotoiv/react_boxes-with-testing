import React, { useState } from "react";
import './Box.css'

const Box = ({ width, height, removeBox, id }) => {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return (
        <div data-testid="box" className="box"
            style={{
                width: `${width}px`,
                height: `${height}px`
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {isHovered && <button data-testid="box-remove" className="box-remove" type='button' onClick={() => removeBox(id)}>x</button>}
        </div >)
}
export default Box;