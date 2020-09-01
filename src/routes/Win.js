import React from 'react';
import AppContext from '../AppContext';

class Win extends React.Component{
    static contextType = AppContext;

    handleClick = () =>{
        if (this.context.demo === true){
            this.context.handleDemo()
            this.props.history.push('/');
        } else {
            this.props.history.push('/Game');
        }
    };


    render(props){

    return (
        <div>
            <div className="instruction-container">
                <h1>Congrats! You win!</h1>
                <button className="newGame-btn" onClick={this.handleClick}>Try again?</button>
            </div>
        </div>
    )};
};

export default Win;