import React from 'react'
import DistanceBar from '../components/DistanceBar'
import { fetchData } from '../components/fetchData';
//import { distance } from "../data";

function DistanceLeft( {data} ) {

    // waarom hernoem je een variable?  
    const randomDistance = data

    /* 
      const interval = setInterval(() => {
        console.log("afstand 2: ", distance)
      //console.log('1 seconde voorbij!');
      const  randomDistance = distance[Math.floor(Math.random()*distance.length)];
      setRandomDistance(randomDistance);
    }, 1000);
    return () => clearInterval(interval);
    */ 

    return (
        <div className="distanceLeftPage">
            <p>  Only {randomDistance} meter to go </p>
            <DistanceBar data={randomDistance} /> 
        </div>
    )
}

export default DistanceLeft
