import React from "react"
import Hand from './Hand'
import Value from './Value'
import Choices from './Choices'
import PlayerCard from './PlayerCards'

class Player extends React.Component{
state = {
	playerCards: this.props.playerCards
}


	render(props){
	const playerhand = this.props.playerCards.map(cards => <PlayerCard key={cards.id} card={cards.face} />)
	const playerValue = this.props.playerCards.reduce((acc, obj) => {
		  if (obj.face === "A"){
		    return acc + 11 > 21 ? acc + 1 : acc + 11;
		  }
		  return acc + obj.value;
		}, 0)

		return (
			<div className="player">
				
				<Value playerValue = {playerValue}  />

				<div className="player-game-container">
					<Hand 
						playerhand={playerhand} 
						playerCards = {this.props.playerCards}
					/>
					<Choices 
						deckShuffle={this.props.deckShuffle}  
						handleDeal={this.props.handleDeal} 
						playerValue={playerValue} 
						changeSides={this.props.changeSides}
						newHand = {this.props.newHand}
						gameStart = {this.props.didGameStart}
						dealerTurn = {this.props.dealerTurn}
						showDealerCard = {this.props.showDealerCard}
					/>
				</div>
			</div>
		)
	}
}

export default Player