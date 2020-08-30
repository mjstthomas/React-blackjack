import React from 'react';
import { Link } from 'react-router-dom';
import './PlayerContainer.css';
import AppContext from '../../../AppContext';
import StrategyBoard from './StrategyBoard/StrategyBoard';

class PlayerContainer extends React.Component {
    static contextType = AppContext
    playerHealth = health =>{
        const healthArray = []
        for (let i = 0; i < [health]; i++){
            healthArray.push(' ')
        }
        return healthArray
    };

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
                <StrategyBoard />
                <Link to='/Profile'><img className={this.props.poweredUp === false ? (this.props.playerHit ? 'player-image-hit' : 'player-image') : 'player-image-powered'} src={this.props.poweredUp ? this.context.image.two : this.context.image.one} alt="player character" /></Link>
            </div>
        )
    }
};

export default PlayerContainer;