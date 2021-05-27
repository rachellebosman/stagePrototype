import React, { useState, useEffect } from 'react'
import { fetchData } from '../components/fetchData';
import DistancePage from './DistancePage';
import GreetingPage from './GreetingPage';

function MainPage() {

    const [distance, setDistance] = useState(0)
    const [randomDistance, setRandomDistance] = useState(0);

    //link to API 
    const URL = "data.json";

    //fetching Data from API
    useEffect(() => {
        fetchData(URL).then((response) => {
            setDistance(response.distance)
        });
    }, []);

    //getting Random number as a fake distanceasdfas
    useEffect(() => {
        const interval = setInterval(() => {
            const randomDistance = distance[Math.floor(Math.random() * distance.length)];
            if (randomDistance !== undefined) {
                setRandomDistance(randomDistance);
            }
        }, 2000);
        return () => clearInterval(interval);

    }, [distance]);

    if (randomDistance >= 1.5) {
        return <GreetingPage />;
    } else {
        return <DistancePage data={randomDistance} />;
    }
}

export default MainPage
