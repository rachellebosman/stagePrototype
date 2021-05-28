import React, { useState, useEffect } from 'react'
import { fetchData } from '../components/fetchData';
import DistancePage from './DistancePage';
import GreetingPage from './GreetingPage';


// dit is es5 syntax, probeer de functie eens te herschrijven in es6
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
            // ik heb deze code eerder gezien, probeer eens te zorgen dat je die code maar 1x gebruikt en 2x gebruikt
            const randomDistance = distance[Math.floor(Math.random() * distance.length)];
            // wanneer kan randomDistance undefined worden?
            if (randomDistance !== undefined) {
                setRandomDistance(randomDistance);
            }
        }, 2000);
        return () => clearInterval(interval);

    }, [distance]);

    // je else is hier overbnodig aangezien je al een return doet (bij if/else, als je returned in dde if is de else onnodig)
    if (randomDistance >= 1.5) {
        return <GreetingPage />;
    } else {
        return <DistancePage data={randomDistance} />;
    }
}

export default MainPage
