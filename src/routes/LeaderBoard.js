import React from 'react'
import config from '../config'
import './LeaderBoard.css'

class LeaderBoard extends React.Component{
state = {
    rankedUsers: []
}
goBack = () =>{
    this.props.history.goBack()
}

componentDidMount(){
    fetch(`${config.API_ENDPOINT}/LeaderBoard`)
        .then(result => result.json())
        .then(result =>{
            const sortedResult = result.sort((a, b) => b.wins - a.wins)
            this.setState({rankedUsers: sortedResult})
        })
}
    render(){

        const rankedList = this.state.rankedUsers.map(item =>{
            const nameArray = item.user_name.split('@');
            const name = nameArray[0];
             return <li key={item.id}>{name} <span className="wins">{item.wins}</span> </li>
            })

        return (
            <div>
                <button className="goBack-btn" onClick={this.goBack}>Go Back</button>
                <div className="instruction-container">
                    <h1>Leaders</h1>
                    <h4>Name            Wins</h4>
                    <ol>
                        {rankedList}
                    </ol>
                </div>
            </div>
        )
    }
}
export default LeaderBoard;