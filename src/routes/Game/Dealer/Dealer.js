import React from "react";
import Hand from './Hand';
import DealerCard from './DealerCard';
import FaceDownDealerCard from './FaceDownDealerCard';

class Dealer extends React.Component{
  
deal = (dealerValue) => dealerValue < 17 ? this.props.handleDealer() : this.props.handOver()
	render(props){
		const newDealerCards = [...this.props.dealerCards].sort((a, b)=> a.value - b.value);

		const dealerValue = newDealerCards.reduce((acc, obj) => {
		  if (obj.face === "A"){
		    return acc + 11 > 21 ? acc + 1 : acc + 11;
		  }
		  return acc + obj.value;
		}, 0);
		
        const dealerhand = this.props.dealerCardsOnTurn.map(cards =>{
			if (cards === this.props.dealerCards[0]){
				return <FaceDownDealerCard 
							key={cards.id} 
							card={cards.face} 
							showDealerCard = {this.props.showDealerCard}
						/>
			} 
			return <DealerCard 
						key={cards.id} 
						card={cards.face}
					/>
		});

		const turn = () => this.props.playerBust === false ? (this.props.dealerTurn ? this.deal(dealerValue) : null) : this.props.handOver();
		
		turn();

	return (
		<div className="dealer">
			<Hand 
				dealerhand = {dealerhand}
				dealerCards={this.props.dealerCards} 
				dealerTurn={this.props.dealerTurn} 
			/>
		</div>
	)}
};


export default Dealer