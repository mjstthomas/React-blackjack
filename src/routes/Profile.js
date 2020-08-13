import React from 'react'
import AppContext from '../AppContext'
import images from '../images/images'


class Profile extends React.Component{
    static contextType = AppContext;
    state={
        change: false,
        image: ''
    }

    handleChangeImage = () =>{
        this.setState({change: !this.state.change})
    }
    handleClick = () =>{
        this.props.history.goBack();
    }

    handleDelete = () =>{
        this.context.handleDelete()
        this.props.history.push('/')
    }
    handleImage = event =>{
        const { name } = event.target
        this.context.handleNewImage(name)
        this.setState({change: false})
    }
    render(){
        const user = this.context.user
        return (
            <div>
                <div className="goback">
                    <button className="goBack-btn" onClick={this.handleClick} >Go Back</button>
                </div>
                <div className="profile-container">
                    <h1>Profile</h1>
                    <p>player name: {user.user_name}</p>
                    <p>games played: {user.total_games}</p>
                    <p>wins: {user.wins}</p>
                    <p>followed strategy: {user.correct}</p>
                    <p>player image: {user.user_image} <button className="stay-btn" onClick={this.handleChangeImage}>Change?</button></p>
                </div>
                <div className="delete-container">
                    <button className="newGame-btn" onClick={() => this.handleDelete(user)}>delete player?</button>
                </div>
                {this.state.change &&
                    <div>
                        <form className="image-form-container"> 
                            <div>
                                <img className="player-image-form" name="goku" src={images[0].one} onClick={this.handleImage} alt="goku"/>
                            </div>
                            <div>
                                <img className="player-image-form" name="naruto" src={images[1].one} onClick={this.handleImage} alt="naruto"/>
                            </div>
                            <div>
                                <img className="player-image-form" name="saitama" src={images[2].one} onClick={this.handleImage} alt="saitama"/>
                            </div>
                        </form>
                    </div>}
            </div>
        )
    }
}

export default Profile;