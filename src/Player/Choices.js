import React from 'react'

export default function Choices(props){
	const playerSwitch = props.playerValue < 21 ? props.handleDeal : props.changeSides;
	return(
		<div>
			<button type="button" onClick={props.deckShuffle}>Shuffle</button>
        	<button type="button" onClick={playerSwitch}>Deal</button>
        </div>)
}