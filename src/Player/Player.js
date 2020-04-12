import React from "react"
import Hand from './Hand'
import Value from './Value'
import Choices from './Choices'
import PlayerCard from './PlayerCards'

class Player extends React.Component{
state = {
	playerCards: []
}
handleDeal = () =>{
	const newCard = this.props.cards.shift()
          this.setState({
          playerCards: this.state.playerCards.concat(newCard)
        })
     }

	render(props){
	const playerhand = this.state.playerCards.map(cards => <PlayerCard key={cards.id} card={cards.face} />)
	const playerValue = this.state.playerCards.reduce((acc, obj) => {
          return acc + obj.value
        }, 0)
		return (
			<div className="player">
				<Hand playerhand={playerhand} playerCards = {this.state.playerCards}/>
				<Value playerValue = {playerValue}  />
				<Choices 
					deckShuffle={this.props.deckShuffle}  
					handleDeal={this.handleDeal} 
					playerValue={playerValue} 
					changeSides={this.props.changeSides}
				/>
			</div>
		)
	}
}

export default Player