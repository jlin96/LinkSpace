import React from 'react';

class SignupForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {first_name: 'First name', last_name: 'Last name', email: '', password: '', birthday: '', gender: ''}
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(field) {
        return e => {
            this.setState({ [field]: e.target.value});
        }
    }

    clearInput(field) {
        return e => {
            this.setState({[field]: ''})
        }

    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state);
    }

    render() {
        return (
          <>
            <form className="splash-signup-form" onSubmit={this.handleSubmit}>
              <div className="signup-row-one">
                <input
                  className="signup-fname"
                  type="text"
                  value={this.state.first_name}
                  onClick={this.clearInput('first_name')}
                  onChange={this.handleChange('first_name')}
                />
                <input
                  className="signup-lname"
                  type="text"
                  value={this.state.last_name}
                  onClick={this.clearInput('last_name')}
                  onChange={this.handleChange('last_name')}
                />
              </div>
            </form>
          </>
        );
    }
}

export default SignupForm;