import React, {useEffect, useState} from 'react'
import DistanceBar from '../components/DistanceBar'
import { fetchData } from '../components/fetchData';
//import { distance } from "../data";

function DistanceLeft() {

    const [distance, setDistance] = useState(0)
    const [randomDistance, setRandomDistance] = useState(0);

    const URL = "data.json" ;

    useEffect(() => {
      fetchData(URL).then((response) => {
        console.log(response)
        setDistance(response)
        console.log(distance)
      });

      const interval = setInterval(() => {
        console.log("afstand 2: ", distance)
     
      const  randomDistance = distance[Math.floor(Math.random()*distance.length)];
      setRandomDistance(randomDistance);
    }, 1000);
    return () => clearInterval(interval);


    }, []);

    console.log("afstand 1: ", distance)
    console.log("random", randomDistance)

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
