import React from "react"
import DealerCard from './DealerCard'

export default function Hand(props){
	return (
		<div className="dealerBoard">
			{props.dealerhand}
		</div>
		)
}