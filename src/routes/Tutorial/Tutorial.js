import React from 'react';
import TutorialCard from './TutorialCard'
import tutorialObject from './tutorialObject'

class Tutorial extends React.Component {
    state = {
        card: 0
    }

    handleNext = () =>{
        if (this.state.card < 3){
            this.setState({card: this.state.card + 1})
        } else {
            this.props.history.push('/Game')
        }
    }
    render(props){
        const item = tutorialObject[this.state.card]
        return (
            <div className='tutorial-container'>
                <TutorialCard card={item.card} header={item.header} content={item.content} />
                <button className="next-btn" onClick={this.handleNext}>Next</button>
            </div>
        )
    }

}

export default Tutorial;