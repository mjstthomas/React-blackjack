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
        const healthArray = this.dealerHealth(this.props.dealerHealth)
        const healthBar = healthArray.map(item => <div className="health"></div>)
        console.log(healthArray.length)
        return (
            <div className="dealer-image-container">
                <div className="dealer-image">

                </div>
                <div className="dealer-health-container">
                    {healthBar}
                </div>



            </div>
        )
    }
}

export default DealerContainer