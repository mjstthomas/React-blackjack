import React from "react"
import Hand from './Hand'
import Value from './Value'
import DealerCard from './DealerCard'

class Dealer extends React.Component{

  
deal = (dealerValue) => dealerValue < 17 ? setTimeout(this.props.handleDealer(), 1000) : null
	render(props){
		const dealerValue = this.props.dealerCards.reduce((acc, obj) => {
       		return acc + obj.value
    	 }, 0)
		const dealerhand = this.props.dealerCards.map(cards => <DealerCard key={cards.id} card={cards.face} />)
		const turn = () => this.props.dealerTurn ? this.deal(dealerValue) : null
		turn()
	return (
		<div className="dealer">
			<Hand dealerhand={dealerhand} dealerCards ={this.props.dealerCards} dealerTurn={this.props.dealerTurn} />
			<Value dealerValue ={dealerValue} />
		</div>
	)}
}

export default Dealer