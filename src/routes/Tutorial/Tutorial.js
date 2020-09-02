import React from 'react';
import TutorialCard from './TutorialCard';
import tutorialObject from './tutorialObject';
import arrow from '../../images/arrow.png';
import AppContext from '../../AppContext';


class Tutorial extends React.Component {
    static contextType = AppContext;

    state = {
        card: 0
    };

    handleNext = () =>{
        if (this.state.card < 4){
            this.setState({card: this.state.card + 1})
        } else {
            
            this.props.history.push('/Game')
        }
    };
    render(props){
        const item = tutorialObject[this.state.card]
        return (
            <div className="tutorial">
                <div className='tutorial-container'>
                    <TutorialCard card={item.card} header={item.header} content={item.content} />
                </div>
                <div className="next-btn-container">
                    <img className="next-image" src={arrow} onClick={this.handleNext} alt="next button"/>
                </div>
            </div>
        )
    };

};

export default Tutorial;