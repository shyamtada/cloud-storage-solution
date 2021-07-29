import React from "react";

function HeaderWave({color})  {
    return (
        <svg viewBox="0 0 500 100"
            preserveAspectRatio="xMinYMin meet">
            <path d="M0, 80 C300, 150 350,  0 700, 150 L500, 00 L0, 0 Z"
                style={{ stroke: 'none', fill: color }}>
            </path>
        </svg>
    )
}

export default HeaderWave;

