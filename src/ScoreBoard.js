import React from "react";

class ScoreBoard extends React.Component {
  state = {
    playerScore: 0,
    dealerScore: 0,
  };

  compare = (dealerScore, playerScore) => {
    if (playerScore > dealerScore && playerScore < 22) {
      this.setState({ playerScore: this.state.playerScore + 1 });
      this.props.handleDealerHealth();
      this.props.nextHand();
    } else if (dealerScore > 21 && playerScore < 22) {
      this.setState({ playerScore: this.state.playerScore + 1 });
      this.props.handleDealerHealth();
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
    const dealerValue = this.props.dealerCards.reduce((acc, obj) => {
      if (obj.face === "A") {
        return acc + 11 < 18 ? acc + 1 : acc + 11;
      }
      return acc + obj.value;
    }, 0);
    const playerValue = this.props.playerCards.reduce((acc, obj) => {
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
        <ul className="Board">
          <li>
            player:<span className="wins">{this.state.playerScore}</span>
          </li>
          <li>
            dealer:<span className="wins">{this.state.dealerScore}</span>
          </li>
        </ul>
      </div>
    );
  }
}
export default ScoreBoard;
