import React from "react"

class FaceDownDealerCard extends React.Component{
    
	render(props){
        console.log(this.props.showDealerCard)
		return (
			<div className = {this.props.showDealerCard == false ? "faceDownStyle" : "myStyle"} >
				<p className="top">{this.props.card}</p>
				<p className="bottom">{this.props.card}</p>
			</div>)
}}


export default FaceDownDealerCard