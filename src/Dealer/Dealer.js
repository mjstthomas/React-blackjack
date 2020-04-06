import React from "react"
import Hand from './Hand'
import Value from './Value'
import DealerCard from './DealerCard'

class Dealer extends React.Component{
constructor(props){
	super(props)
}
componentDidMount(){
	if (this.props.dealerValue < 21){
			this.props.handleDealer()
		} else {
			this.props.stopDeal()
		} 
}
	render(props){
	return (
		<div className="dealer">
			<Hand dealerhand={this.props.dealerhand} dealerCards ={this.props.dealerCards} dealerTurn={this.props.dealerTurn} />
			<Value dealerValue = {this.props.dealerValue} />
		</div>
	)}
}

export default Dealer