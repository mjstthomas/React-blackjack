import React from 'react'

export default function Win(props){
    function handleClick(){
        props.history.push('/Game')
    }
    return (
        <div>
            <div className="instruction-container">
                <h1>Congrats! You win!</h1>
                <button onClick={handleClick}>Try again?</button>
            </div>
        </div>
    )
}