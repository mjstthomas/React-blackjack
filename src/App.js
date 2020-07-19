import React from 'react'
import { Route } from 'react-router-dom'
import Game from './Game/Game'
import Header from './Header'
import Login from './Login'
import './App.css'


class App extends React.Component{
    render(){
        return (
            <div className="App">
                <Header/>
                <div className="game-container">
                    <Route path='/login' exact component={Login}/>
                    <Route path='/' exact component={Game}/>
                </div>
            </div>
        )}
}

export default App;