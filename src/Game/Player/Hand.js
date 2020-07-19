import React from "react"
import Card from './PlayerCards'

export default function Hand(props){
	return (
		<div className="playerBoard">
			{props.playerhand}
		</div>
		)
}