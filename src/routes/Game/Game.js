import React from "react";
import deck from "./deck";
import Card from "./Card";
import Player from "./Player/Player";
import Dealer from "./Dealer/Dealer";
import ScoreBoard from "./ScoreBoard";
import PlayerContainer from "./Player/PlayerContainer";
import DealerContainer from "./Dealer/DealerContainer";
import strategy from "../../strategy";
import AppContext from "../../AppContext";

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
    playerHit: false,
    dealerHit: false,
    doubleDown: false,
  };

  newGameFunction = () => {
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
      handOver: false,
    });
  };

  //Player Functions
  //this function takes the shuffled deck and deals 2 cards to the player and dealer
  gameStart = () => {
    const player = [];
    const dealer = [];
    for (let i = 0; i < 4; i++) {
      const Card = this.state.cards.shift();
      if (i % 2 !== 0) {
        dealer.push(Card);
      } else {
        player.push(Card);
      }
    }
    this.setState({
      playerCards: player,
      dealerCards: dealer,
      dealerCardsOnTurn: dealer,
      gameStart: true,
    });
  };

  //this function takes the deck array and shuffles each card object randomly

  deckShuffle = () => {
    this.context.handleNewGame();
    const newDeck = [...deck];
    for (let i = 0; i < newDeck.length; i++) {
      const j = Math.floor(Math.random() * newDeck.length);
      const temp = newDeck[i];
      newDeck[i] = newDeck[j];
      newDeck[j] = temp;
    }
    setTimeout(() => {
      this.setState({
        cards: newDeck,
      });
      this.gameStart();
    }, 1500);
  };

  newHand = () => {
    this.setState({
      dealerTurn: false,
      playerCards: [],
      dealerCards: [],
      dealerCardsOnTurn: [],
      showDealerCard: false,
      handOver: false,
      poweredUp: false,
      doubleDown: false,
    });
    this.gameStart();
  };

  //this function deals cards to the player
  handleDeal = () => {
    const newCard = this.state.cards.shift();
    const newHand = [...this.state.playerCards, newCard];
    this.setState({ playerCards: newHand });
    const newerHand = [...newHand].sort((a, b) => a.value - b.value);
    const playerValue = newerHand.reduce((acc, obj) => {
      if (obj.face === "A") {
        return acc + 11 > 21 ? acc + 1 : acc + 11;
      }
      return acc + obj.value;
    }, 0);
    if (playerValue === 21) {
      this.changeSides();
    } else if (playerValue > 21) {
      this.setState({ playerBust: true });
      this.changeSides();
    }
  };

  //changes from player to dealer functions
  changeSides = () => {
    this.setState({
      dealerTurn: !this.state.dealerTurn,
      showDealerCard: true,
    });
  };

  //handles double down button, uses handle deal and change sides

  handleDouble = () => {
    this.setState({ doubleDown: true });
    this.handleDeal();
    this.changeSides();
  };
  //deals cards to the dealer
  handleDealer = () => {
    const newCard = this.state.cards.shift();
    const newHand = [...this.state.dealerCards, newCard];
    this.setState({
      dealerCards: newHand,
      dealerCardsOnTurn: newHand,
    });
  };

  //compares both hands values and logs a winner
  handOver = () => {
    this.setState({
      handOver: true,
      dealerTurn: false,
    });
  };

  nextHand = () => {
    this.setState({
      handOver: false,
      playerBust: false,
    });
  };

  handlePlayerHealth = () => {
    let hit = 10;
    if (this.state.doubleDown) {
      hit = 10 * 2;
    }
    if (this.state.playerHealth <= hit) {
      this.props.history.push("/Lose");
    }
    this.setState({
      playerHealth: this.state.playerHealth - hit,
      poweredUp: false,
      playerHit: true,
    });
    setTimeout(() => {
      this.setState({ playerHit: false });
    }, 1000);
  };

  handleDealerHealth = (n) => {
    let hit = n;
    if (this.state.doubleDown) {
      hit = n * 2;
    }

    if (this.state.poweredUp) {
      hit = hit * 1.5;
    }

    if (this.state.dealerHealth <= hit) {
      this.context.handleWin();
      this.props.history.push("/Win");
    }

    this.setState({
      dealerHealth: this.state.dealerHealth - hit,
      dealerHit: true,
    });
    setTimeout(() => {
      this.setState({
        dealerHit: false,
        poweredUp: false,
      });
    }, 1000);
  };

  //implementing how to show strategy
  handleStrategy = (playerValue, playerChoice) => {
    const playerOptions = this.state.strategy.find(
      (item) => item.id === playerValue
    );
    if (playerChoice === playerOptions[this.state.dealerCards[1].face]) {
      this.setState({ poweredUp: true });
    }
  };

  componentDidMount() {
    this.context.demo === false
      ? this.context.manageSignIn()
      : console.log("you are in demo mode");
  }

  render() {
    const visualDeck = this.state.cards.map((cards) => (
      <Card key={cards.id} card={cards.face} />
    ));
    return (
      <div className="Game">
        <div className="dealer-container">
          <div className="placeholder">
            <DealerContainer
              dealerHealth={this.state.dealerHealth}
              dealerHit={this.state.dealerHit}
            />
          </div>
          <Dealer
            playerBust={this.state.playerBust}
            dealerTurn={this.state.dealerTurn}
            dealerCards={this.state.dealerCards}
            dealerCardsOnTurn={this.state.dealerCardsOnTurn}
            dealerValue={this.state.dealerValue}
            handleDealer={this.handleDealer}
            cards={this.state.cards}
            handOver={this.handOver}
            showDealerCard={this.state.showDealerCard}
          />
          <div className="deck-container">{visualDeck}</div>
        </div>
        <div className="centerBoard">
          <ScoreBoard
            playerBust={this.state.playerBust}
            playerCards={this.state.playerCards}
            dealerCards={this.state.dealerCards}
            handOver={this.state.handOver}
            nextHand={this.nextHand}
            deckShuffle={() => this.deckShuffle(deck)}
            deck={this.state.cards}
            handlePlayerHealth={this.handlePlayerHealth}
            handleDealerHealth={this.handleDealerHealth}
            strategyMessage={this.state.strategyMessage}
          />
        </div>
        <div className="player-container">
          <Player
            deckShuffle={() => this.deckShuffle(deck)}
            handleDeal={this.handleDeal}
            playerCards={this.state.playerCards}
            newHand={this.newHand}
            changeSides={this.changeSides}
            gameStart={this.gameStart}
            didGameStart={this.state.gameStart}
            cards={this.state.cards}
            dealerTurn={this.state.dealerTurn}
            showDealerCard={this.state.showDealerCard}
            handleStrategy={this.handleStrategy}
            poweredUp={this.state.poweredUp}
            handleDouble={this.handleDouble}
          />
          <div className="placeholder">
            <PlayerContainer
              playerHealth={this.state.playerHealth}
              poweredUp={this.state.poweredUp}
              playerHit={this.state.playerHit}
            />
          </div>
        </div>
        <div className="ad-container"></div>
      </div>
    );
  }
}

export default Game;
