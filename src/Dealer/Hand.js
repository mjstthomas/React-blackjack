import React from "react"
import DealerCard from './DealerCard'

export default function Hand(props){
	const dealersTurn = () => props.dealerTurn ? (props.dealerValue < 21 ? props.handleDealer : props.stopDeal) : null
	return (
		<div className="dealerBoard">
			{dealersTurn}
			{props.dealerhand}
		</div>
		)
}