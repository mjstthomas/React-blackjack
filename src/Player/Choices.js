import React from 'react'

export default function Choices(props){
	return(
		<div>
			<button type="button" onClick={props.deckShuffle}>Shuffle</button>
        	<button type="button" onClick={props.handleDeal}>Deal</button>
        </div>)
}