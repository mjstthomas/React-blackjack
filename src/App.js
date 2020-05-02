import React from 'react';
import './App.css';
import deck from './deck'
import Card from './Card'
import Player from './Player/Player'
import Dealer from './Dealer/Dealer'
import PlayerCard from './Player/PlayerCards'
import DealerCard from './Dealer/DealerCard'
import ScoreBoard from './ScoreBoard'


class App extends React.Component {
  state = {
    cards: [],
    playerCards: [],
    dealerCards: [],
    dealerTurn: false,
    gameStart: false,
    handOver: false
  }

  newGameFunction = () =>{
    this.setState({
      cards: [],
      playerCards: [],
      dealerCards: [],
      dealerTurn: false,
      gameStart: false,
      handOver: false
    })
  }
  //Player Functions
  //this function takes the shuffled deck and deals 2 cards to the player and dealer
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
  }
  //this function takes the deck array and shuffles each card object randomly

  deckShuffle = () => {
    const newDeck = [...deck]
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
  }

  newHand = () => {
    this.setState({
      dealerTurn: false,
      playerCards: [],
      dealerCards: [],
      handOver: false
    })
    this.gameStart()
  }
//this function deals cards to the player
  handleDeal = () =>{
  const newCard = this.state.cards.shift()
  const newHand = [...this.state.playerCards, newCard]
          this.setState({
          playerCards: newHand
        })
     }
//changes from player to dealer functions
  changeSides = () => {
    this.setState({dealerTurn: !this.state.dealerTurn})
  }
//deals cards to the dealer 
  handleDealer= () => {
        const newCard = this.state.cards.shift()
           this.setState({
                dealerCards: this.state.dealerCards.concat(newCard)
            }) 
  }

  //compares both hands values and logs a winner
  handOver = () =>{
    this.setState({
      handOver: true,
      dealerTurn: false
    })
    console.log('compare hands')
  }
  nextHand = () =>{
    this.setState({handOver: false})
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
                    handOver = {this.handOver}
                  />
                </div>
                <ScoreBoard 
                  playerCards = {this.state.playerCards}
                  dealerCards = {this.state.dealerCards}
                  handOver = {this.state.handOver}
                  nextHand = {this.nextHand}
                  deckShuffle= {() => this.deckShuffle(deck)}
                  deck = {this.state.cards}
                  />
                {visualDeck}
                <div className="centerBoard"> </div>
                <br />
                <Player 
                  playerValue={this.state.playerValue}
                  deckShuffle={() => this.deckShuffle(deck)} 
                  handleDeal={this.handleDeal}
                  playerCards = {this.state.playerCards}
                  newHand = {this.newHand}
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
