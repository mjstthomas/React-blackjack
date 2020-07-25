import React from 'react'

class Choices extends React.Component{

	handleHit = () =>{
		this.props.handleDeal();
		this.props.handleStrategy(this.props.playerValue, "h");
	}

	handleStay = () =>{
		this.props.changeSides();
		this.props.handleStrategy(this.props.playerValue, "s");
	}
	render(props){
		const playerSwitch = this.props.playerValue < 21 ? this.props.handleDeal : this.props.changeSides;
		return(
			<div className="btn-container">
				{!this.props.gameStart && <button className="newGame-btn" type="button" onClick={this.props.deckShuffle}>New Game?</button>}
				{this.props.gameStart && this.props.showDealerCard && <button className="newHand-btn" type="button" onClick={this.props.newHand}>New</button>}
	        	{this.props.gameStart && !this.props.dealerTurn && !this.props.showDealerCard && <button className="deal-btn" type="button" onClick={this.handleHit} >Hit</button>}
	        	{this.props.gameStart && !this.props.dealerTurn && !this.props.showDealerCard && <button className="stay-btn" type="button" onClick={this.handleStay}>Stay</button>}
	        </div>)}
}
export default Choices