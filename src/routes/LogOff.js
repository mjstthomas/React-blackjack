import React from  'react'
import AppContext from '../AppContext'

class LogOff extends React.Component{
    static contextType = AppContext
    handleLogOff = ()=>{
        this.context.handleLogoff()
        this.props.history.push('/')
    }
    handleCancel=()=>{
        this.props.history.push('/Game')
    }

    render(){
        return (
            <div className="instructions-container">
                <h1>Are you sure?</h1>
                <button onClick={this.handleLogOff}>Yes</button>
                <button onClick={this.handleCancel}>No</button>
            </div>
        )
    }
}
export default LogOff;