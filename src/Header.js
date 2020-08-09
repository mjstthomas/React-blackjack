import React from 'react';
import { Link } from 'react-router-dom'

class Header extends React.Component {

    handleLogoff = () =>{
        this.props.handleLogoff()
    }

    render(){
        return (
            <nav>
                <div className="user-image-container">
                    <Link className="link" to='/Profile'>{this.props.user.user_name}</Link>
                </div>
                {!this.props.user.user_name
                ? <ul className="options">
                    <li onClick={this.props.handleDemo}><Link className="link" to='/Tutorial'>Demo</Link></li>
                    <li><Link className="link" to='/LeaderBoard'>LeaderBoard</Link></li>
                </ul>
                : <ul className="options">
                        <li><Link className="link" to='/LeaderBoard'>LeaderBoard</Link></li>
                        <li><Link className="link" to='/LogOff'>Log off</Link></li>
                    </ul>}
            </nav>
        )
    }
}
export default Header;