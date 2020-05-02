import React from 'react'

class Choices extends React.Component{
	render(props){
		const playerSwitch = this.props.playerValue < 21 ? this.props.handleDeal : this.props.changeSides;
		return(
			<div>
				{!this.props.gameStart && <button type="button" onClick={this.props.deckShuffle}>New Game?</button>}
				{this.props.gameStart && <button type="button" onClick={this.props.newHand}>New Hand</button>}
	        	{this.props.gameStart && <button type="button" onClick={playerSwitch} >Deal</button>}
	        	{this.props.gameStart && <button type="button" onClick={this.props.changeSides}>Stay</button>}
	        </div>)}
}
export default Choices