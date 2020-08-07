import React from 'react'
import { Link } from 'react-router-dom'
import './PlayerContainer.css'
import images from '../../../images/images'
import AppContext from '../../../AppContext'

class PlayerContainer extends React.Component {
    static contextType = AppContext
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
                    <p>{this.props.playerHealth}/100</p>
                </div>
                <Link to='/Profile'><img className={this.props.poweredUp === false ? 'player-image' : 'player-image-powered'} src={this.props.poweredUp ? this.context.image.two : this.context.image.one} /></Link>
            </div>
        )
    }
}

export default PlayerContainer