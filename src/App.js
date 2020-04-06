import React from 'react';
import './App.css';
import deck from './deck'
import Card from './Card'
import Player from './Player/Player'
import Dealer from './Dealer/Dealer'
import PlayerCard from './Player/PlayerCards'
import DealerCard from './Dealer/DealerCard'
// import Dealer from './Dealer/Dealer'


class App extends React.Component {
  state = {
    origDeck: deck,
    cards: [],
    playerCards: [],
    dealerCards: [],
    dealerTurn: false
  }
  //Player Functions
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
    console.log(this.state.origDeck)
    console.log(newDeck)
    console.log(this.state.cards)
  }
  handleDeal = event => {
      const newCard = this.state.cards.shift()
      this.setState({
        playerCards: this.state.playerCards.concat(newCard)
      })
  }
  changeSides = () => {
    this.setState({dealerTurn: true})
    console.log(this.state.dealerTurn)
  }
  //Dealer functions
  handleDealer = () => {
    this.interval = setInterval(() => {
      const newCard = this.state.cards.shift()
      this.setState({
        dealerCards: this.state.dealerCards.concat(newCard)
      })
    }, 1000)
  }
  stopDeal = () => {
    clearInterval(this.interval)
  }


  render(){
    const playerhand = this.state.playerCards.map(cards => <PlayerCard key={cards.id} card={cards.face} />)
    const playerValue = this.state.playerCards.reduce((acc, obj) => {
        return acc + obj.value
      }, 0)
    const dealerhand = this.state.dealerCards.map(cards => <DealerCard key={cards.id} card={cards.face} />)
    const dealerValue = this.state.dealerCards.reduce((acc, obj) => {
        return acc + obj.value
      }, 0)
    const visualDeck = this.state.cards.map(cards => <Card key={cards.id} card={cards.face} />)
    return (
      <div className="App">
        <Dealer 
          dealerTurn = {this.state.dealerTurn}
          dealerCards={this.state.dealerCards}
          dealerhand={dealerhand}
          dealerValue={dealerValue}
          handleDealer={this.handleDealer}
          stopDeal={this.stopDeal}
        />
        {visualDeck}
        <div className="centerBoard"> </div>
        <br />
        <Player 
          playerhand={playerhand} 
          playerValue={playerValue} 
          deckShuffle={() => this.deckShuffle(deck)} 
          handleDeal={this.handleDeal}
          playerCards = {this.state.playerCards}
          changeSides = {this.changeSides}
        />
      </div>
    );
  }
}

export default App;
