import React from 'react';
import logo from './logo.svg';
import './App.css';
import deck from './deck'
import Card from './Card'

class App extends React.Component {
  state = {
    cards: deck,
    playerCards: []
  }
  deckShuffle = () => {
    const newDeck = []
    for(let i = 0; i < deck.length; i++){
      const j = Math.floor(Math.random() * i)
      const temp = deck[i]
      deck[i] = deck[j]
      deck[j] = temp
    }
    this.setState({cards: deck})
  }
  handleDeal = event => {
    const newCard = this.state.cards.shift()
    this.setState(prevState => {
      return {playerCards: prevState.playerCards.concat(newCard)}
    })
    console.log(this.state.playerCards)
  }
  render(){
    const playerhand = this.state.playerCards.map(cards => <Card key={cards.id} card={cards.face} />)
    return (
      <div className="App">
        <button type="button" onClick={this.deckShuffle}>Shuffle</button>
        <button type="button" onClick={this.handleDeal}>Deal</button>
        <br />
        {playerhand}
      </div>
    );
  }
}

export default App;
