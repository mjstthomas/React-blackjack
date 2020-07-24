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
                    <Link to='/'>{this.props.user.user_name}</Link>
                </div>
                {!this.props.user.user_name
                ? <ul className="options">
                    <li><Link to='/login'>Log-In</Link></li>
                    <li><Link to='/signup'>Sign-Up</Link></li>
                </ul>
                : <button className="signout" onClick={this.handleLogoff}>Log off</button>}
            </nav>
        )
    }
}
export default Header;