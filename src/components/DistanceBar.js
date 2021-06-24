import React from 'react'

function DistanceBar({ distance }) {

    const fullWidth = 600;
    //max distance = 1.5 for the distance bar
    if (distance > 1.5) {
        distance = 1.5
    }
    const distanceWidth = fullWidth / 1.5 * distance

    return (

        <div className="distance-bar">
            <p> 0 </p>
            <svg height="60" width="600">
                <rect x="0" y="0" rx="20" width={fullWidth} height="35" fill="white"></rect>
                <rect className="svg-animation" x="0" y="0" rx="20" width={distanceWidth} height="35" fill="#fb8500"></rect>
            </svg>
            <p> 1.5 </p>
        </div>

    )
}

export default DistanceBar
