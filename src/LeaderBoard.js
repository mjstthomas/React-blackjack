import React from 'react'
import users from './userObject'

class LeaderBoard extends React.Component{

goBack = () =>{
    this.props.history.goBack()
}
    render(){
        const ranked = [...users].sort((a, b)=> b.wins - a.wins)

        const rankedList = ranked.map(item => <li>name:{item.user_name} wins:{item.wins} </li>)

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