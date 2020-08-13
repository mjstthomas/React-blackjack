import React from "react";
import Value from './Value';
export default function Hand(props){
	return (
		<div className="playerBoard">
			<Value playerValue={props.playerValue} />
			{props.playerhand}
		</div>
		)
}