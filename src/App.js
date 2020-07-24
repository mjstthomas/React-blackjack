import React from 'react'
import { Route } from 'react-router-dom'
import Game from './Game/Game'
import Header from './Header'
import Login from './Login'
import LandingPage from './LandingPage'
import users from './userObject'
import Win from './Win'
import Lose from './Lose'
import './App.css'
import AppContext from './AppContext'


class App extends React.Component{
    state = {
        user: {},
        signedIn: false,
        signInError: ""
    }
    
    handleSignIn = (user)=>{
        const {email, password} = user
        const newUser = users.filter(item => item.user_email == email && item.password == password)

        if(newUser.length < 1){
            this.setState({signInError: "user not found"})
        } else {
            this.setState({
                user: newUser[0],
                signInError: ""
            })
        }
    }

    handleLogoff = () =>{
        this.setState({user: {}})
    }
    render(){
        const context = {
            handleSignIn: this.handleSignIn,
            signInError: this.state.signInError
        }
        return (
            <AppContext.Provider value={context}>
                <div className="App">
                    <Header 
                        user={this.state.user} 
                        handleLogoff={this.handleLogoff}
                    />
                    <div className="game-container">
                        <Route path='/' exact component={LandingPage} />
                        <Route path='/login' exact component={Login}/>
                        <Route path='/Game' exact component={Game}/>
                        <Route path='/Win' exact component={Win} />
                        <Route path='/Lose' exact component={Lose} />
                    </div>
                </div>
            </AppContext.Provider>
        )}
}

export default App;