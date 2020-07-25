import React from 'react'
import AppContext from './AppContext'
import { Link } from 'react-router-dom'


class Profile extends React.Component{
    static contextType = AppContext;


    handleClick = () =>{
        this.props.history.goBack();
    }

    handleDelete = user =>{
        this.context.handleDelete(user)
        this.props.history.push('/')
    }

    render(){
        const user = this.context.user
        return (
            <div>
                <div className="goback">
                    <p className="goBack" onClick={this.handleClick} >Go Back</p>
                </div>
                <div className="profile-container">
                    <h1>Profile</h1>
                    <p>player name: {user.user_name}</p>
                    <p>games played: {user.total_games}</p>
                    <p>wins: {user.wins}</p>
                    <p>followed strategy: {user.correct}</p>
                </div>
                <div className="delete-container">
                    <button onClick={() => this.handleDelete(user)}>delete player?</button>
                </div>
            </div>
        )
    }
}

export default Profile;