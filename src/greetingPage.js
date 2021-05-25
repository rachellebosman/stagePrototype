import React from 'react'

function greetingPage() {

    const greetings = [
        "Hi, hardworker",
        "Hello, beautiful",
        "Hey, smartypants",
        "Hallo, jij verdient koffie"
    ]

    const  randomGreeting = greetings[Math.floor(Math.random()*greetings.length)];
    console.log(randomGreeting)

    return (
        <div>
            <h1> {randomGreeting} </h1>
        </div>
    )
}

export default greetingPage
