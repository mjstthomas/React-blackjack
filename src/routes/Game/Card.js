import React from 'react'
import "./card.css"

export default function Card(props){
	const myStyle = {
		position: "relative",
		fontSize: "24px",
		width: "100px",
		height: "200px",
		border: "1px solid white",
		borderRadius: "15px",
		float: "right",
		backgroundColor: "black",
		marginLeft: "-110px"
	}
		return (
			<div style= {myStyle} className="Card">
				<p className="top">{props.card}</p>
				<p className="bottom">{props.card}</p>
			</div>)
}