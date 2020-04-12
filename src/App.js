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
    dealerTurn: false,
    gameStart: false
  }
  //Player Functions
  gameStart = () =>{
    for (let i = 0; i < 4; i++){
      if (this.state.dealerTurn = true){
        const dCard = this.state.cards.shift()
           this.setState({
                dealerCards: this.state.dealerCards.concat(dCard),
                dealerTurn: false
            }) 
      } else {
        const pCard = this.state.cards.shift()
           this.setState({
                dealerCards: this.state.playerCards.concat(pCard),
                dealerTurn: true
            }) 
      }
    }
    this.setState({gameStart: true})
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
    console.log(this.state.origDeck)
    console.log(newDeck)
    console.log(this.state.cards)
    this.gameStart()
  }

  changeSides = () => {
    this.setState({dealerTurn: !this.state.dealerTurn})
    console.log(this.state.dealerTurn)
  }
  //Dealer functions
  // stopDeal = (dealerValue) => {
  //   setInterval(() => {
  //     dealerValue >= 21 && clearInterval(this.interval)
  //   }, 1000)
  // }


  render(){
    const visualDeck = this.state.cards.map(cards => <Card key={cards.id} card={cards.face} />)
    return (
      <div className="App">
        <div className="dealerBoard">
          {this.state.dealerTurn === true && <Dealer 
            dealerTurn = {this.state.dealerTurn}
            dealerCards={this.state.dealerCards}
            dealerValue = {this.state.dealerValue}
            handleDealer={this.handleDealer}
            cards = {this.state.cards}
          />}
        </div>
        {visualDeck}
        <div className="centerBoard"> </div>
        <br />
        <Player 
          playerValue={this.state.playerValue}
          deckShuffle={() => this.deckShuffle(deck)} 
          handleDeal={this.handleDeal}
          playerCards = {this.state.playerCards}
          changeSides = {this.changeSides}
          gameStart = {this.gameStart}
          didGameStart = {this.state.gameStart}
          cards = {this.state.cards}
        />
      </div>
    );
  }
}

export default App;
