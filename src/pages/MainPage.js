import React, { useState, useEffect } from 'react'
import { fetchData } from '../utils/fetchData';
import DistancePage from './DistancePage';
import GreetingPage from './GreetingPage';
import DataPage from '../pages/DataPage';
import DistanceFeedbackPage from './DistanceFeedbackPage'
import '../styles/distancePage.scss'

const MainPage = () => {

    const [distance, setDistance] = useState(0)
    const [currentDistance, setCurrentDistance] = useState(0)
    const [arrayAmountPeople, setArrayAmountPeople] = useState([]);
    const [totalPeople, setTotalPeople] = useState(1);
    //start number = first id in dataNew.json
    let number = -4;

    const URL = "dataNew.json";  //link mockup data
    const URL2 = "https://raspberry-pi-api.azurewebsites.net/test "; //link live data [not working]

    //fetching Data from API
    useEffect(() => {
        fetchData(URL).then((response) => {
            const dataFromFetch = response.items.map((item) => {
                //return item.distances / 1000
                return item
            })
            setDistance(dataFromFetch)
        });
    }, []);

    /*
    //FOR RANDOM ITEMS
    useEffect(() => {
        const interval = setInterval(() => {
            const randomDistance = distance[Math.floor(Math.random() * distance.length)];
            if (randomDistance === undefined) return;
            //setRandomDistance(randomDistance);
            setRandomDistance(randomDistance.distances / 1000)
            setRandomAmountPeople(randomDistance.heatsource_amount)
        }, 1000);
        return () => clearInterval(interval);
    }, [distance]);
    */

    useEffect(() => {
        const interval = setInterval(() => {
            const x = distance.map((item) => {
                if (number == item.id) {
                    setCurrentDistance(item.distances / 1000)
                    setArrayAmountPeople(arrayAmountPeople => [...arrayAmountPeople, item.heatsource_amount])
                }
            })
            number = number + 1;
            if (number === 35) (
                number = 0
            )
        }, 1000);
        return () => clearInterval(interval);
    }, [distance]);

    console.log(arrayAmountPeople)

    //const [totalPeople, setTotalPeople] = useState(1);



    if ((arrayAmountPeople[arrayAmountPeople.length - 1] > arrayAmountPeople[arrayAmountPeople.length - 2])) {

        return <GreetingPage />;
    }

    if (currentDistance <= 1.5 && arrayAmountPeople[arrayAmountPeople.length - 1] >= 2) {
        return <DistancePage distance={currentDistance} />;
    }

    if (currentDistance >= 1.5 && arrayAmountPeople[arrayAmountPeople.length - 1] >= 2) {
        return <DistanceFeedbackPage totalPeople={totalPeople} />;
    }

    return <DataPage totalPeople={totalPeople} />
}

export default MainPage
