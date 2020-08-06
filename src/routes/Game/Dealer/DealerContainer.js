import React from 'react'
import './DealerContainer.css'
import images from '../../../images/images'

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
                    <p>{this.props.dealerHealth}/100</p>
                </div>
                <img className='dealer-image' src={images.dealer} alt="dealer images" />
            </div>
        )
    }
}

export default DealerContainer