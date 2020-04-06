import React from "react"

export default function PlayerCard(props){
	const myStyle = {
		position: "relative",
		fontSize: "24px",
		width: "100px",
		height: "200px",
		border: "1px solid white",
		borderRadius: "15px",
		float: "left",
		backgroundColor: "black",
		color: "white",
		marginLeft: "-50px"
	}
		return (
			<div style= {myStyle} className="Card">
				<p className="top">{props.card}</p>
				<p className="bottom">{props.card}</p>
			</div>)
}