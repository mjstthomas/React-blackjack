import React from 'react';
import deck from './deck';
import Card from './Card';
import Player from './Player/Player';
import Dealer from './Dealer/Dealer';
import ScoreBoard from './ScoreBoard';
import PlayerContainer from './Player/PlayerContainer';
import DealerContainer from './Dealer/DealerContainer';
import strategy from '../../strategy';
import AppContext from '../../AppContext';


class Game extends React.Component {

  static contextType = AppContext;

  state = {
    strategy: strategy,
    cards: [],
    playerCards: [],
    playerBust: false,
    playerHealth: 100,
    poweredUp: false,
    dealerCards: [],
    dealerCardsOnTurn: [],
    showDealerCard: false,
    dealerHealth: 100,
    dealerTurn: false,
    gameStart: false,
    handOver: false,
    strategyMessage: "",
  };




  newGameFunction = () =>{
    this.setState({
      strategy: strategy,
    cards: [],
    playerCards: [],
    playerBust: false,
    playerHealth: 100,
    dealerCards: [],
    dealerCardsOnTurn: [],
    showDealerCard: false,
    dealerHealth: 100,
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
    this.context.handleNewGame()
    const newDeck = [...deck, ...deck, ...deck, ...deck]
    for(let i = 0; i < newDeck.length; i++){
      newDeck[i].id = i;
    }
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
    }, 1000);
  }



  newHand = () => {
    this.setState({
      dealerTurn: false,
      playerCards: [],
      dealerCards: [],
      dealerCardsOnTurn: [],
      showDealerCard: false,
      handOver: false,
      poweredUp: false
    })
    this.gameStart()
  }



//this function deals cards to the player
  handleDeal = () =>{
  const newCard = this.state.cards.shift();
  const newHand = [...this.state.playerCards, newCard];
    this.setState({playerCards: newHand});
    const newerHand = [...newHand].sort((a, b) => a.value - b.value)
    const playerValue = newerHand.reduce((acc, obj) => {
		  if (obj.face === "A"){
		    return acc + 11 > 21 ? acc + 1 : acc + 11;
		  }
		  return acc + obj.value;
    }, 0)
    if (playerValue === 21){
      this.changeSides()
    } else if (playerValue > 21){
      this.setState({playerBust: true})
      this.changeSides()
    }
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
      dealerTurn: false,
    })
  }



  nextHand = () =>{
    this.setState({
      handOver: false,
      playerBust: false,
    })
  }



  handlePlayerHealth = () =>{
    if (this.state.playerHealth < 10){
      this.props.history.push('/Lose')
    }
    this.setState({playerHealth: this.state.playerHealth - 10, poweredUp: false})
  }



  handleDealerHealth = (n) =>{
    if (this.state.dealerHealth <= n){
      this.context.handleWin()
      this.props.history.push('/Win')
    } else if (this.state.poweredUp){
      const powered = n * 1.5;
      this.setState({dealerHealth: this.state.dealerHealth - powered, poweredUp: false})
    } else {
      this.setState({dealerHealth: this.state.dealerHealth - n})
    }

  }



//implementing how to show strategy
handleStrategy = (playerValue, playerChoice) =>{
    const playerOptions = this.state.strategy.find(item => item.id === playerValue)
    if (playerChoice === playerOptions[this.state.dealerCards[1].face]){
      this.setState({strategyMessage: 'You were correct', poweredUp: true})
      setTimeout(()=>{
        this.setState({strategyMessage: ""})
      }, 5000)
    } else if (playerChoice !== playerOptions[this.state.dealerCards[1].face]){
      this.setState({strategyMessage: 'You were incorrect'})
      setTimeout(()=>{
        this.setState({strategyMessage: ""})
      }, 5000)
    }

}



componentDidMount(){
  this.context.demo === false ? this.context.manageSignIn(this.props.history) : console.log('hello');
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
                    playerBust = {this.state.playerBust}
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
                  playerBust = {this.state.playerBust}
                  playerCards = {this.state.playerCards}
                  dealerCards = {this.state.dealerCards}
                  handOver = {this.state.handOver}
                  nextHand = {this.nextHand}
                  deckShuffle= {() => this.deckShuffle(deck)}
                  deck = {this.state.cards}
                  handlePlayerHealth = {this.handlePlayerHealth}
                  handleDealerHealth = {this.handleDealerHealth}
                  strategyMessage = {this.state.strategyMessage}
                  />
        </div>
        <div className="player-container">
                <Player 
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
                  handleStrategy = {this.handleStrategy}
                  poweredUp = {this.state.poweredUp}
                />
          <div className="placeholder">
            <PlayerContainer 
              playerHealth = {this.state.playerHealth}
              poweredUp= {this.state.poweredUp}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
