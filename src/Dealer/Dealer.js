import React from "react"
import Hand from './Hand'
import Value from './Value'
import DealerCard from './DealerCard'

class Dealer extends React.Component{

	state={
		dealerCards: []
	}

  handleDealer= () => {
      	const newCard = this.props.cards.shift()
           this.setState({
                dealerCards: this.state.dealerCards.concat(newCard)
            }) 
  }
  
deal = (dealerValue) => dealerValue < 17 ? setTimeout(this.handleDealer(), 1000) : null
	render(props){
		const dealerValue = this.state.dealerCards.reduce((acc, obj) => {
       		return acc + obj.value
    	 }, 0)
		this.deal(dealerValue)
		const dealerhand = this.state.dealerCards.map(cards => <DealerCard key={cards.id} card={cards.face} />)
	return (
		<div className="dealer">
			<Hand dealerhand={dealerhand} dealerCards ={this.state.dealerCards} dealerTurn={this.props.dealerTurn} />
			<Value dealerValue ={dealerValue} />
		</div>
	)}
}

export default Dealer