import React from 'react';
import './App.css';
import deck from './deck'
import Card from './Card'

class App extends React.Component {
  state = {
    cards: deck,
    playerCards: [],
    playerHand: 0
  }
  deckShuffle = () => {
    for(let i = 0; i < deck.length; i++){
      const j = Math.floor(Math.random() * deck.length)
      const temp = deck[i]
      deck[i] = deck[j]
      deck[j] = temp
    }
    this.setState({cards: deck})
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
    console.log(this.state.playerCards)
    console.log(this.state.playerHand)
    const playerhand = this.state.playerCards.map(cards => <Card key={cards.id} card={cards.face} />)
    const handValue = this.state.playerCards.reduce((acc, obj) => {
        return acc + obj.value
      }, 0)
    return (
      <div className="App">
        <button type="button" onClick={this.deckShuffle}>Shuffle</button>
        <button type="button" onClick={this.handleDeal}>Deal</button>
        <p className="score">{handValue}</p>
        <br />
        {playerhand}
      </div>
    );
  }
}

export default App;
