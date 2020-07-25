import React from 'react'
import { Link } from 'react-router-dom'
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
        let i = 0;
        const healthArray = this.playerHealth(this.props.playerHealth)
        const healthBar = healthArray.map(item => <div key={i++} className="player-health"></div>)
        return (
            <div className="Player-image-container">
                <div className="player-health-container">
                    {healthBar}
                </div>
                <Link to='/Profile'><div className="player-image"></div></Link>
            </div>
        )
    }
}

export default PlayerContainer