import React from 'react'

export default function Lose(props){
    function handleClick(){
        props.history.push('/Game')
    }
    return (
        <div>
            <div className="instruction-container">
                <h1>Sorry! You Lose!</h1>
                <button onClick={handleClick}>Try again?</button>
            </div>
        </div>
    )
}