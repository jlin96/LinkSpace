import React from 'react';

class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {email: '', password: ''}
    }

     handleChange(field) {
        return e => {
            this.setState({ [field]: e.target.value});
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state);
    }

    render() {
        <>
            <form>

            </form>
        </>
    }
}

export default LoginForm;