import React from 'react'
import '../styles/style.scss'
import '../styles/greetingPage.scss'
import { greetings } from '../utils/constants'

function GreetingPage() {

        const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];

        return (
                <div className="greeting-page">
                        <div className="greeting"> <h1 className="greeting"> {randomGreeting}</h1> </div>
                        <div className="coffeeCup">
                                <img src="../img/coffee.svg"></img>
                        </div>
                </div>
        )
}

export default GreetingPage
