import React from 'react'
import config from '../config'

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

        const rankedList = this.state.rankedUsers.map(item => <li key={item.id}>name:{item.user_name} wins:{item.wins} </li>)

        return (
            <div>
                <p onClick={this.goBack}>Go Back</p>
                <div className="leader-container">
                    <ol>
                        {rankedList}
                    </ol>
                </div>
            </div>
        )
    }
}
export default LeaderBoard;