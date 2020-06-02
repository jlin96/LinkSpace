import React from 'react';

class SignupForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {first_name: '', last_name: '', email: '', password: '', birthday: '', gender: ''}
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
        return (
            <>
                <form>
                    
                </form>
            </>
        )
    }
}

export default SignupForm;