import React from 'react'

function DistanceBar({ distance }) {

    const fullWidth = 600;
    const distanceWidth = fullWidth / 1.5 * distance

    return (
        <div className="distanceChart">
            <p> 0 </p>
            <svg height="60" width="600">
                <rect x="0" y="0" width={fullWidth} height="35" fill="lightblue"></rect>
                <rect className="svg-animation" x="0" y="0" width={distanceWidth} height="35" fill="orange"></rect>
            </svg>
            <p> 1.5 </p>
        </div>
    )
}

export default DistanceBar
