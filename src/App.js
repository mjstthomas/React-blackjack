import React from 'react';
import './App.css';
import deck from './deck'
import Card from './Card'
import Player from './Player/Player'

class App extends React.Component {
  state = {
    cards: [],
    playerCards: [],
    playerHand: 0
  }
  deckShuffle = (array) => {
    const newDeck = array;
    for(let i = 0; i < newDeck.length; i++){
      const j = Math.floor(Math.random() * newDeck.length)
      const temp = newDeck[i]
      newDeck[i] = newDeck[j]
      newDeck[j] = temp
    }
    this.setState({
      cards: newDeck,
    playerCards: [],
    playerHand: 0
    })
    console.log(deck)
    console.log(newDeck)
    console.log(this.state.cards)
  }
  handleDeal = event => {
    const newCard = this.state.cards.shift()
    // const handValue = this.state.playerCards.reduce((acc, obj) => {
    //     return acc + obj.value
    //   }, 0)
    this.setState({
        playerCards: this.state.playerCards.concat(newCard),
        // playerHand: handValue
      }
    )

  }
  render(){
    const playerhand = this.state.playerCards.map(cards => <Card key={cards.id} card={cards.face} />)
    const playerValue = this.state.playerCards.reduce((acc, obj) => {
        return acc + obj.value
      }, 0)
    return (
      <div className="App">
        <br />
        <Player 
          playerhand={playerhand} 
          playerValue={playerValue} 
          deckShuffle={() => this.deckShuffle(deck)} 
          handleDeal={this.handleDeal}
          playerCards = {this.state.playerCards}
        />
      </div>
    );
  }
}

export default App;
