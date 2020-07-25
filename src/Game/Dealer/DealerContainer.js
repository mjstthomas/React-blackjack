import React from 'react'
import './DealerContainer.css'

class DealerContainer extends React.Component {

    dealerHealth = health =>{
        const healthArray = []
        for (let i = 0; i < [health]; i++){
            healthArray.push(' ')
        }
        return healthArray
    }

    render(){
        let i = 0;
        const healthArray = this.dealerHealth(this.props.dealerHealth)
        const healthBar = healthArray.map(item => <div key={i++} className="health"></div>)
        return (
            <div className="dealer-image-container">
                <div className="dealer-health-container">
                    {healthBar}
                </div>
                <div className="dealer-image">
                </div>
            </div>
        )
    }
}

export default DealerContainer