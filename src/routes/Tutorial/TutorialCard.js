import React from 'react';
import './TutorialCard.css';


class TutorialCard extends React.Component{
    
    render(props){
    return (
        <div className="tutorial-card">
            <p className="top">{this.props.card}</p>
            <div className="card-content-container">
                <h5>{this.props.header}</h5>
                <p className="card-content">{this.props.content}</p>
            </div>
			<p className="bottom">{this.props.card}</p>
        </div>
    )
    };
};

export default TutorialCard;