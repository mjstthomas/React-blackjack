import React from 'react'
import { Route } from 'react-router-dom'
import Game from './Game/Game'
import Header from './Header'
import Login from './Login'
import Signup from './signup'
import LandingPage from './LandingPage'
import users from './userObject'
import Win from './Win'
import Lose from './Lose'
import Profile from './Profile'
import LogOff from './LogOff'
import LeaderBoard from './LeaderBoard'
import './App.css'
import AppContext from './AppContext'
import { v4 as uuidv4 } from 'uuid'
import * as firebase from 'firebase';
import config from './config'
import 'firebase/firestore';


class App extends React.Component{
    state = {
        users: users,
        user: {},
        signedIn: false,
        signInError: ""
    }

    handleSignIn = (user)=>{
        
        this.setState({
            user: user,
            signedIn: true,
            signInError: ""
        })
        console.log(this.state.user)
    }

    
    manageSignIn = () =>{
        firebase.auth().onAuthStateChanged(user => {
            const userProf = {};
            user.providerData.forEach((profile) => {
                const displayNameArray = profile.displayName.split(' ')
                const displayName = displayNameArray[0]
            
              userProf.id = profile.uid
              userProf.displayName = displayName
              userProf.email= profile.email
              userProf.image= profile.photoURL
            });
            fetch(`${config.API_ENDPOINT}/users/${userProf.email}:${userProf.id}:${userProf.displayName}`)
                .then(response => response.json())
                .then(result =>{
                    console.log(result)
                    if (!result.user_email){
                        const newUser = {
                            id: userProf.id,
                            user_name: userProf.displayName,
                            user_email: userProf.email,
                            password: userProf.id,
                            wins: 0,
                            total_games: 0,
                            correct: 0
                        }
                        this.setState(newUser)
                    }
                    this.handleSignIn(result)
                })
        })
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
        console.log(newUsers)
    }

    handleDelete = (user) =>{
        const newUsers = this.state.users.filter(users => users.id != user.id)
        this.setState({users: newUsers})
        console.log(newUsers)
    }
    handleNewGame = () =>{
        const newGame = {...this.state.user}
        newGame.total_games++;
        this.setState({user: newGame})
    }
    handleWin = () =>{
        const winner = {...this.state.user}
        winner.wins++
        this.setState({user: winner})
        console.log(winner)
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
            manageSignIn: this.manageSignIn
        }
        return (
            <AppContext.Provider value={context}>
                <div className="App">
                    <Header 
                        user={this.state.user} 
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
                    </div>
                </div>
            </AppContext.Provider>
        )}
}

export default App;