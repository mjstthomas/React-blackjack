import React from "react"
import Hand from './Hand'
import Value from './Value'
import DealerCard from './DealerCard'
import FaceDownDealerCard from './FaceDownDealerCard'

class Dealer extends React.Component{

  
deal = (dealerValue) => dealerValue < 17 ? this.props.handleDealer() : this.props.handOver()
	render(props){
		const dealerValue = this.props.dealerCards.reduce((acc, obj) => {
		  if (obj.face === "A"){
		    return acc + 11 > 21 ? acc + 1 : acc + 11;
		  }
		  return acc + obj.value;
		}, 0)

		console.log(this.props.dealerTurn)
		const dealerhandonturn = this.props.dealerCards.map(cards => <DealerCard key={cards.id} card={cards.face}/>)
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
		})
		const turn = () => this.props.dealerTurn ? this.deal(dealerValue) : null
		turn()
	return (
		<div className="dealer">
			<Hand 
				dealerhand = {dealerhand}
				dealerCards={this.props.dealerCards} 
				dealerTurn={this.props.dealerTurn} 
			/>
			<Value dealerValue ={dealerValue} />
		</div>
	)}
}


export default Dealer