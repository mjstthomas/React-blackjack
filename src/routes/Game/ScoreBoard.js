import React from "react";

class ScoreBoard extends React.Component {
  state = {
    playerScore: 0,
    dealerScore: 0,
  };

  compare = (dealerScore, playerScore) => {
    if (this.props.playerBust) {
      this.setState({ dealerScore: this.state.dealerScore + 1 });
      this.props.handlePlayerHealth();
      this.props.nextHand();
    } else if (playerScore > dealerScore && playerScore < 22) {
      this.setState({ playerScore: this.state.playerScore + 1 });
      this.props.handleDealerHealth(10);
      this.props.nextHand();
    } else if (dealerScore > 21 && playerScore < 22) {
      this.setState({ playerScore: this.state.playerScore + 1 });
      this.props.handleDealerHealth(10);
      this.props.nextHand();
    } else if (dealerScore > playerScore && dealerScore < 22) {
      this.setState({ dealerScore: this.state.dealerScore + 1 });
      this.props.handlePlayerHealth();
      this.props.nextHand();
    } else if (playerScore > 21 && dealerScore < 22) {
      this.setState({ dealerScore: this.state.dealerScore + 1 });
      this.props.handlePlayerHealth();
      this.props.nextHand();
    } else {
      this.props.nextHand();
    }
  };
  render() {
    const newDealerCards = [...this.props.dealerCards].sort(
      (a, b) => a.value - b.value
    );
    const newPlayerCards = [...this.props.playerCards].sort(
      (a, b) => a.value - b.value
    );
    const dealerValue = newDealerCards.reduce((acc, obj) => {
      if (obj.face === "A") {
        return acc + 11 < 18 ? acc + 1 : acc + 11;
      }
      return acc + obj.value;
    }, 0);

    let playerValue = newPlayerCards.reduce((acc, obj) => {
      if (obj.face === "A") {
        return acc + 11 > 21 ? acc + 1 : acc + 11;
      }
      return acc + obj.value;
    }, 0);

    const scoreBoard = () =>
      this.props.handOver ? this.compare(dealerValue, playerValue) : null;
    scoreBoard();
    return (
      <div className="scoreBoard">
        <div className="Board">
          {this.props.strategyMessage && (
            <h3 className="strategy-message">{this.props.strategyMessage}</h3>
          )}
        </div>
      </div>
    );
  }
}
export default ScoreBoard;
