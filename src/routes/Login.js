import React from "react";
import AppContext from "../AppContext";

class Login extends React.Component {
  static contextType = AppContext;

  state = {
    email: "",
    password: "",
    error: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.context.handleSignIn(this.state);
    setTimeout(() => {
      this.setState({ error: this.context.signInError });
      if (this.context.signInError === "") {
        this.props.history.push("/Game");
      }
    }, 1000);
  };

  handleClick = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            className="email-container"
            placeholder="email"
            onChange={this.handleClick}
            required
          />
          <input
            type="password"
            name="password"
            className="password-container"
            placeholder="password"
            onChange={this.handleClick}
            required
          />
          <br />
          <button type="submit" className="submit-btn">
            sign-in
          </button>
        </form>
        <p>{this.state.error}</p>
      </div>
    );
  }
}

export default Login;
