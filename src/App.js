import React from 'react'
import { Route } from 'react-router-dom'
import Game from './routes/Game/Game'
import Header from './Header'
import Login from './routes/Login'
import Signup from './routes/signup'
import LandingPage from './routes/LandingPage'
import users from './userObject'
import Win from './routes/Win'
import Lose from './routes/Lose'
import Profile from './routes/Profile'
import LogOff from './routes/LogOff'
import LeaderBoard from './routes/LeaderBoard'
import Tutorial from './routes/Tutorial/Tutorial'
import './App.css'
import AppContext from './AppContext'
import { v4 as uuidv4 } from 'uuid'
import * as firebase from 'firebase';
import config from './config'
import 'firebase/firestore';
import images from './images/images'


class App extends React.Component{
    state = {
        users: users,
        user: {},
        image: images[1],
        signedIn: false,
        signInError: "",
        demo: false,
        tutorial: false
    }

    handleSignIn = (user)=>{
        const userImage = images.filter(item => user.user_image === item.title)
        this.setState({
            user: user,
            signedIn: true,
            signInError: "",
            image: userImage[0]
        })
    }

    handleDemo = () =>{
        this.setState({demo: true})
    }
    manageSignIn = (obj) =>{
        firebase.auth().onAuthStateChanged(user => {
            const userProf = {};
            user.providerData.forEach((profile) => {
                const displayNameArray = profile.displayName !== null ? profile.displayName.split(' ') : ['Player'];
                const displayName = displayNameArray[0]
              userProf.id = profile.uid
              userProf.displayName = displayName
              userProf.email= profile.email
              userProf.image= profile.photoURL
            });
            fetch(`${config.API_ENDPOINT}/users/${userProf.email}:${userProf.id}:${userProf.displayName}`)
                .then(response => response.json())
                .then(result =>{
                    if (!result.user_email){
                        
                        const newUser = {
                            id: userProf.id,
                            user_name: userProf.displayName,
                            user_email: userProf.email,
                            password: userProf.id,
                            wins: 0,
                            total_games: 0,
                            correct: 0,
                        }
                        return this.setState({
                            user: newUser,
                            tutorial: true
                        })

                    }
                    return this.handleSignIn(result)
                })
        })
    }


    handleImage = () =>{
        if (this.state.user.image){
        const userImage = images.find(item => this.state.user.image === item.title)
            this.setState({image: userImage})
        }   
    }



    handleLogoff = () =>{
        this.setState({user: {}})
    }

    handleSignup = newUser => {
        newUser.id = uuidv4();
        newUser.wins = 0;
        newUser.total_games = 0;
        newUser.correct = 0;
        const newUsers = [...this.state.users, newUser]
        this.setState({users: newUsers})
    }

    handleDelete = (user) =>{
        this.setState({user: {}})
        fetch(`${config.API_ENDPOINT}/user`, {
            method: 'DELETE',
            body: JSON.stringify(this.state.user),
            headers: {'content-type': 'application/json'}
        })
    }

    handleWin = () =>{
        const winner = {...this.state.user}
        winner.wins++
        this.setState({user: winner})

       if (this.state.demo === false){
            fetch(`${config.API_ENDPOINT}/user`, {
                method: 'PATCH',
                body: JSON.stringify(winner),
                headers: {'content-type': 'application/json'}
            })
        } 
    }

    //updates total games for user

    handleNewGame = () =>{
        const player = {...this.state.user}
        player.total_games++
        this.setState({user: player})
        if (this.state.demo === false){
            fetch(`${config.API_ENDPOINT}/user`, {
            method: 'PATCH',
            body: JSON.stringify(player),
            headers: {'content-type': 'application/json'}
            })
        }
    }

    handleNewImage = image =>{
        const player = {...this.state.user}
        player.user_image = image
        const userImage = images.filter(item => image === item.title)
        this.setState({
            user: player,
            image: userImage[0]
        })
        if (this.state.demo === false){
                fetch(`${config.API_ENDPOINT}/user`, {
                    method: 'PATCH',
                    body: JSON.stringify(player),
                    headers: {'content-type': 'application/json'}
                })
        }
    }


    render(){
        const context = {
            user: this.state.user,
            handleSignIn: this.handleSignIn,
            signInError: this.state.signInError,
            handleSignup: this.handleSignup,
            handleDelete: this.handleDelete,
            handleWin: this.handleWin,
            handleNewGame: this.handleNewGame,
            handleLogoff: this.handleLogoff,
            manageSignIn: this.manageSignIn,
            demo: this.state.demo,
            image: this.state.image,
            handleNewImage: this.handleNewImage,
            tutorial: this.state.tutorial
        }
        return (
            <AppContext.Provider value={context}>
                <div className="App">
                    <Header 
                        user={this.state.user}
                        handleDemo={this.handleDemo}
                    />
                    <div className="game-container">
                        <Route path='/' exact component={LandingPage} />
                        <Route path='/Signup' exact component={Signup} />
                        <Route path='/Login' exact component={Login}/>
                        <Route path='/Game' exact component={Game}/>
                        <Route path='/Win' exact component={Win} />
                        <Route path='/Lose' exact component={Lose} />
                        <Route path='/Profile' exact component={Profile} />
                        <Route path='/LogOff' exact component={LogOff} />
                        <Route path='/LeaderBoard' exact component={LeaderBoard} />
                        <Route path='/Tutorial' exact component={Tutorial} />
                    </div>
                </div>
            </AppContext.Provider>
        )}
}

export default App;