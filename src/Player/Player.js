import React from "react"
import Hand from './Hand'
import Value from './Value'
import Choices from './Choices'

export default function Player(props){
	return (
		<div className="player">
			<Hand playerhand={props.playerhand} playerCards = {props.playerCards}/>
			<Value playerValue = {props.playerValue} />
			<Choices deckShuffle={props.deckShuffle} handleDeal={props.handleDeal} />
		</div>
	)
}