import React, { useEffect, useState } from 'react'
import MainPage from './MainPage';
import '../styles/distancePage.scss'
//import { fetchData } from '../utils/fetchData';

function DistanceFeedbackPage() {

    const [status, setStatus] = useState(false)

    useEffect(() => {
        setTimeout(() => setStatus(true), 5000);
    }, []);

    if (status === true) {
        return <MainPage />;
    }

    return (
        <div className="container">
            <p className="text text-animation"> Thankyou for keeping distance </p>
            <div className="drip">
                <img src="../img/coffeeDrip.svg"></img>
            </div>

            <div className="coffee-cup">
                <img src="../img/coffee.svg"></img>
            </div>
        </div>
    )
}

export default DistanceFeedbackPage;