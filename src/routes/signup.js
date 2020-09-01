import React from 'react';
import AppContext from '../AppContext';

class Signup extends React.Component{
    static contextType = AppContext;

    state={
        user_name: "",
        user_eamil: "",
        password: "",
        retype_password: "",
        error: ""
    };

    handleChange= (event) =>{
        const { name, value } = event.target
        this.setState({[name]: value})
    };

    handleSubmit = event =>{
        event.preventDefault();
        const { user_name, user_email, password, retype_password } = this.state;
        const newUser = { user_name, user_email, password, retype_password };

        if (password.length < 7){
            return this.setState({error: "password must be 7 characters or longer"})
        }

        if (password !== retype_password){
            return this.setState({error: 'passwords do not match'})
        }

        this.context.handleSignup(newUser)

        this.props.history.push('/Login')

    };

    handleClick = event =>{
        this.setState({error: ""})
    };

    render(props){
        return (
            <div>
                <div className="signup-form-container" onSubmit={this.handleSubmit}>
                    <h1>Sign Up Form</h1>
                    <form className="signup-form">
                        <label htmlFor="user_name">User name:</label><br/>
                        <input type="text" name="user_name" onClick={this.handleClick} onChange={this.handleChange} required/><br/>
                        <label htmlFor="user_email">User email:</label><br/>
                        <input type="email" name="user_email" onClick={this.handleClick} onChange={this.handleChange} required /><br/>
                        <label htmlFor="password">Password:</label><br/>
                        <input type="password" name="password" onClick={this.handleClick} onChange={this.handleChange} required/><br/>
                        <label htmlFor="retype_password">Retype password:</label><br/>
                        <input type="password" name="retype_password" onClick={this.handleClick} onChange={this.handleChange} required/><br/>
                        <button>Submit</button>
                    </form>
                    <p className="error-message">{this.state.error}</p>
                </div>
            </div>
        )
    };
};

export default Signup;