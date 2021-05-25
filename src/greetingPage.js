import React from 'react'
import './styles/style.scss';

function greetingPage() {

    const greetings = [
        "Hi, hardworker 👋",
        "Hello, beautiful 👋",
        "Hey, smartypants 👋",
        "Hi, you deserve a coffee 👋"
    ]

    const  randomGreeting = greetings[Math.floor(Math.random()*greetings.length)];
    //console.log(randomGreeting)

    return (
        <div>
            <h1 class="greeting"> {randomGreeting}</h1>
        </div>
    )
}

export default greetingPage
