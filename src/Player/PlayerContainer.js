import React from 'react'
import './PlayerContainer.css'

class PlayerContainer extends React.Component {

    playerHealth = health =>{
        const healthArray = []
        for (let i = 0; i < [health]; i++){
            healthArray.push(' ')
        }
        return healthArray
    }

    render(){
        const healthArray = this.playerHealth(this.props.playerHealth)
        const healthBar = healthArray.map(item => <div className="health"></div>)
        return (
            <div className="Player-image-container">
                <div className="player-image">

                </div>
                <div className="player-health-container">
                    {healthBar}
                </div>


            </div>
        )
    }
}

export default PlayerContainer