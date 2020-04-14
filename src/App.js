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
    const player = []
    const dealer = []
    for (let i = 0; i < 4; i++){
      const Card = this.state.cards.shift()
      if (i % 2 !== 0){
            dealer.push(Card)
      } else {
            player.push(Card)
      }
    }
    this.setState({
      playerCards: player,
      dealerCards: dealer,
      gameStart: true
    })
    console.log(this.state.playerCards)
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
      cards: newDeck
    })

    setTimeout(() => {
      this.gameStart()
    }, 1000)
    console.log(this.state.playerCards)
    console.log(this.state.dealerCards)
  }

  handleDeal = () =>{
  const newCard = this.state.cards.shift()
          this.setState({
          playerCards: this.state.playerCards.concat(newCard)
        })
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
  handleDealer= () => {
        const newCard = this.state.cards.shift()
           this.setState({
                dealerCards: this.state.dealerCards.concat(newCard)
            }) 
  }

  render(){
    const visualDeck = this.state.cards.map(cards => <Card key={cards.id} card={cards.face} />)
    return (
      <div className="App">
        <div className="dealerBoard">
                  <Dealer 
                    dealerTurn = {this.state.dealerTurn}
                    dealerCards={this.state.dealerCards}
                    dealerValue = {this.state.dealerValue}
                    handleDealer={this.handleDealer}
                    cards = {this.state.cards}
                  />
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
