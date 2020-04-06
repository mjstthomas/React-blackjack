import React from "react"
import Hand from './Hand'
import Value from './Value'
import DealerCard from './DealerCard'

export default function Dealer(props){
	const dealersTurn = () => props.dealerTurn === true ? (props.dealerValue < 21 ? props.handleDealer : props.stopDeal) : null;
	return (
		<div className="dealer">
			{dealersTurn}
			<Hand dealerhand={props.dealerhand} dealerCards ={props.dealerCards} dealerTurn={props.dealerTurn} />
			<Value dealerValue = {props.dealerValue} />
		</div>
	)
}