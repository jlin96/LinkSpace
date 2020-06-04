import React from 'react';

class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {email: '', password: ''}
        this.handleSubmit = this.handleSubmit.bind(this);
        this.userError = this.userError.bind(this);
    }

    userError() {
      if (this.props.loginErrors[0]) {
        return this.props.loginErrors[0].includes('email') ? 
          <>
            <div className="login-email-error">
              {this.props.loginErrors[0]}
              <span className="login-email-error-bold"> Sign up for an account.</span>
            </div> 
            <div className="login-email-triangle">
            </div>
          </>
          : <div></div>;
      }
    }

    passwordError() {}

    handleChange(field) {
        return e => {
            this.setState({ [field]: e.target.value});
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state);
    }

    render() {
        return (
          <>
            <div className="login-email-error-wrapper">{this.userError()}</div>
            <form className="splash-login-form" onSubmit={this.handleSubmit}>
              <span className="label-wrapper">
                <label className="login-email"> Email or Phone </label>
                <input
                  type="text"
                  value={this.state.email}
                  onChange={this.handleChange("email")}
                />
              </span>
              <span className="label-wrapper">
                <label className="login-password">Password</label>
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.handleChange("password")}
                />
                <span>Forgot account?</span>
              </span>
              <span className="button-wrapper">
                <label className="login-button">
                  <input
                    className="login-button-text"
                    type="submit"
                    value="Log In"
                  />
                </label>
              </span>
            </form>
          </>
        );
    }
}

export default LoginForm;