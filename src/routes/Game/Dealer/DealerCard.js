import React from "react";

class DealerCard extends React.Component{

	render(props){
		return (
			<div className="myStyle">
				<p className="top">{this.props.card}</p>
				<p className="bottom">{this.props.card}</p>
			</div>)
}};


export default DealerCard