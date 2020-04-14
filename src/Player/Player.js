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
          return acc + obj.value
        }, 0)
		return (
			<div className="player">
				<Hand playerhand={playerhand} playerCards = {this.state.playerCards}/>
				<Value playerValue = {playerValue}  />
				<Choices 
					deckShuffle={this.props.deckShuffle}  
					handleDeal={this.props.handleDeal} 
					playerValue={playerValue} 
					changeSides={this.props.changeSides}
				/>
			</div>
		)
	}
}

export default Player