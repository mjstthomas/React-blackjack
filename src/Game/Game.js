import React from 'react';
import deck from './deck'
import Card from './Card'
import Player from './Player/Player'
import Dealer from './Dealer/Dealer'
import ScoreBoard from './ScoreBoard'
import PlayerContainer from './Player/PlayerContainer'
import DealerContainer from './Dealer/DealerContainer'


class Game extends React.Component {
  state = {
    cards: [],
    playerCards: [],
    playerHealth: 100,
    dealerCards: [],
    dealerCardsOnTurn: [],
    showDealerCard: false,
    dealerHealth: 100,
    dealerTurn: false,
    gameStart: false,
    handOver: false
  }

  newGameFunction = () =>{
    this.setState({
      cards: [],
      playerCards: [],
      dealerCards: [],
      dealerCardsOnTurn: [],
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
      dealerCardsOnTurn: dealer,
      gameStart: true
    })
  }
  //this function takes the deck array and shuffles each card object randomly

  deckShuffle = () => {
    const newDeck = [...deck, ...deck, ...deck, ...deck]
    const id = 0
    for(let i = 0; i < newDeck.length; i++){
      newDeck[i].key = i;
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
      dealerCardsOnTurn: [],
      showDealerCard: false,
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
    this.setState({
          dealerTurn: !this.state.dealerTurn,
          showDealerCard: true
        })
  }
//deals cards to the dealer 
  handleDealer= () => {
        const newCard = this.state.cards.shift()
        const newHand = [...this.state.dealerCards, newCard]
           this.setState({
                dealerCards: newHand,
                dealerCardsOnTurn: newHand
            }) 
  }

  //compares both hands values and logs a winner
  handOver = () =>{
    this.setState({
      handOver: true,
      dealerTurn: false
    })
  }
  nextHand = () =>{
    this.setState({handOver: false})
  }

  handlePlayerHealth = () =>{
    this.setState({playerHealth: this.state.playerHealth - 25})
  }

  handleDealerHealth = () =>{
    this.setState({dealerHealth: this.state.dealerHealth - 25})
  }

  render(){
    const visualDeck = this.state.cards.map(cards => <Card key={cards.id} card={cards.face} />)
    return (
      <div className="Game">
        <div className="dealer-container">
          <div className="placeholder">
            <DealerContainer
              dealerHealth = {this.state.dealerHealth} 
            />
          </div>
                  <Dealer 
                    dealerTurn = {this.state.dealerTurn}
                    dealerCards={this.state.dealerCards}
                    dealerCardsOnTurn = {this.state.dealerCardsOnTurn}
                    dealerValue = {this.state.dealerValue}
                    handleDealer={this.handleDealer}
                    cards = {this.state.cards}
                    handOver = {this.handOver}
                    showDealerCard={this.state.showDealerCard}
                  />
          <div className="placeholder"></div>
            {/* {visualDeck} */}
          </div>
        <div className="centerBoard"> 
                <ScoreBoard 
                  playerCards = {this.state.playerCards}
                  dealerCards = {this.state.dealerCards}
                  handOver = {this.state.handOver}
                  nextHand = {this.nextHand}
                  deckShuffle= {() => this.deckShuffle(deck)}
                  deck = {this.state.cards}
                  handlePlayerHealth = {this.handlePlayerHealth}
                  handleDealerHealth = {this.handleDealerHealth}
                  />
        </div>
        <div className="player-container">
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
                  dealerTurn = {this.state.dealerTurn}
                  showDealerCard = {this.state.showDealerCard}
                />
          <div className="placeholder">
            <PlayerContainer 
              playerHealth = {this.state.playerHealth}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
