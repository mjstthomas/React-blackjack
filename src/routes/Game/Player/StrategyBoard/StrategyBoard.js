import React from 'react'
import HandStrategy from './HandStrategy'
import strategy from '../../../../strategy'
import './StrategyBoard.css'

class StrategyBoard extends React.Component{
    state = {
        tableView: false
    }

handleView = () =>{
    this.setState({tableView: !this.state.tableView})
}
render(){
    const handBoard = strategy.map(item => 
        <HandStrategy
            key={item.id}
            id={item.id} 
            two={item['2']}
            three={item['3']}
            four={item['4']}
            five={item['5']}
            six={item['6']}
            seven={item['7']}
            eight={item['8']}
            nine={item['9']}
            ten={item['10']}
            jack={item['J']}
            queen={item['Q']}
            king={item['K']}
            ace={item['A']}
        />)
    return(
        <div className="strategy-board-container">
            <h1 className="board-controller" onClick={this.handleView}>?</h1>
            <div className={`strategy-board ${!this.state.tableView ? 'hidden' : null}`}>
            <h3 className="board-title">Strategy Board</h3>
            <table>
                <thead>
                    <tr>
                        <th>v</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5</th>
                        <th>6</th>
                        <th>7</th>
                        <th>8</th>
                        <th>9</th>
                        <th>10</th>
                        <th>J</th>
                        <th>Q</th>
                        <th>K</th>
                        <th>A</th>
                    </tr>
                </thead>
                <tbody>
                    {handBoard}
                </tbody>
            </table>
            <p>H = hit  S = stay</p>
            </div>
        </div>
    )}
}

export default StrategyBoard;