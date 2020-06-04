import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

class SignupForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            first_name: '', 
            last_name: '', 
            email: '', 
            re_email:'', 
            password: '', 
            birthday:'',
            month: '6', 
            day: '3', 
            year: '1995', 
            gender: ''}
        this.passwordError = this.passwordError.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.isValidEmail = this.isValidEmail.bind(this);
    }

    passwordError() {
      if (this.props.signupErrors[0]) {
        return this.props.signupErrors[0].includes('characters') ? 
          <div className="signup-password-error">
            {this.props.signupErrors[0]}
          </div> : <div></div>;
      }
    }

    isValidEmail() {
        return this.state.email.includes(".com") ? (
          <div className="signup-email-wrapper">
            <input
              className="signup-email"
              type="text"
              placeholder="Re-enter email"
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              onChange={this.handleChange("re_email")}
            />
          </div>
        ) : (
          <div></div>
        );
    }

    handleChange(field) {
        return e => {
            this.setState({ [field]: e.target.value});
            if(field === 'month' || field === 'day' || field === 'year') {
                this.setState({
                  birthday: `${this.state.year}-${this.state.month}-${this.state.day}`,
                });
            }
        }
    }

    handleFocus(e) {
        let class_name = "";
        if (e.target.classList.value.includes("fname")) {
          class_name = "fname";
        } else if (e.target.classList.value.includes("lname")) {
          class_name = "fname";
        } else if (e.target.classList.value.includes("email")) {
          class_name = "email";
        } else if (e.target.classList.value.includes("password")) {
          class_name = "password";
        }
        $(`div.signup-${class_name}-icon`).addClass("hidden");
        e.target.classList.remove("signup-form-blur");
        e.target.classList.add("signup-form-focus");
    }

    handleBlur(e) {
      let class_name= '';
      if (e.target.classList.value.includes("fname")) {
        class_name = 'fname';
      } else if (e.target.classList.value.includes("lname")) {
        class_name = 'fname';
      } else if (e.target.classList.value.includes("email")) {
        class_name = 'email';
      } else if (e.target.classList.value.includes("password")) {
        class_name = 'password';
      }

      if (e.target.value.length === 0) {
        e.target.classList.remove("signup-form-focus");
        e.target.classList.add("signup-form-blur");
        $(`div.signup-${class_name}-icon`).removeClass("hidden");
        // signup - fname - icon;
      }
    }
    
    handleSubmit(e) {
        e.preventDefault();
        if(this.state.email === this.state.re_email) {
            this.props.signup(this.state);
        }
    }

    render() {
        const years = ['Year']
        for(let i = 2020; i >= 1905; i--) {
            years.push(i);
        }

        const days = ['Day']
        for (let i = 1; i <= 31; i++) {
          days.push(i);
        }

        const months = ["Month", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        const birthdayYears = years.map( year => {
            return <option key={year} value={year}>{year}</option>
        })

        const birthdayDays = days.map( day => {
            return <option key={day} value={day}>{day}</option>;
        })

        const birthdayMonths = months.map( (month, idx) => {
            return <option key={month} value={idx}>{month}</option>;
        })

        return (
          <>
            <div className="signup-password-error-wrapper">
              {this.passwordError()}
            </div>
            <form className="splash-signup-form" onSubmit={this.handleSubmit}>
              <div className="signup-row-one">
                <input
                  className="signup-fname"
                  type="text"
                  placeholder="First name"
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  onChange={this.handleChange("first_name")}
                />
                <div className="signup-fname-icon hidden">
                  <FontAwesomeIcon className="icon" icon={faExclamationCircle} />
                </div>
                <input
                  className="signup-lname"
                  type="text"
                  placeholder="Last name"
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  onChange={this.handleChange("last_name")}
                />
              </div>

              <div className="signup-email-wrapper">
                <input
                  className="signup-email"
                  type="text"
                  placeholder="Mobile number or email"
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  onChange={this.handleChange("email")}
                />
              </div>

              {this.isValidEmail()}
              <div className="signup-password-wrapper">
                <input
                  className="signup-password"
                  type="password"
                  placeholder="New password"
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  onChange={this.handleChange("password")}
                />
              </div>

              <div className="signup-birthday-wrapper">
                <span className="signup-birthday-text">Birthday</span>

                <div className="signup-birthday-selector">
                  <select
                    name={this.state.month}
                    className="signup-month"
                    onChange={this.handleChange("month")}
                    defaultValue={"6"}
                  >
                    {birthdayMonths}
                  </select>

                  <select
                    name={this.state.day}
                    className="signup-day"
                    onChange={this.handleChange("day")}
                    defaultValue={"3"}
                  >
                    {birthdayDays}
                  </select>

                  <select
                    name={this.state.day}
                    className="signup-year"
                    onChange={this.handleChange("year")}
                    defaultValue={"1995"}
                  >
                    {birthdayYears}
                  </select>
                  <FontAwesomeIcon
                    icon={faQuestionCircle}
                    className="birthday-question-icon"
                  />
                </div>
              </div>

              <div className="signup-gender-wrapper">
                <span className="signup-gender-text">Gender</span>

                <div className="signup-gender-selector">
                  <input
                    type="radio"
                    name={this.state.gender}
                    value="F"
                    className="gender-input"
                    onChange={this.handleChange("gender")}
                  />
                  <label className="gender-input-text">Female</label>
                  <input
                    type="radio"
                    name={this.state.gender}
                    value="M"
                    className="gender-input"
                    onChange={this.handleChange("gender")}
                  />
                  <label className="gender-input-text">Male</label>
                  <input
                    type="radio"
                    name={this.state.gender}
                    value="C"
                    className="gender-input"
                    onChange={this.handleChange("gender")}
                  />
                  <label className="gender-input-text">Custom</label>
                </div>
              </div>
              <div className="signup-terms-wrapper">
                <p className="signup-terms">
                  By clicking Sign Up, you agree to our{" "}
                  <a href="" className="signup-terms-hyperlink">
                    Terms
                  </a>
                  ,{" "}
                  <a href="" className="signup-terms-hyperlink">
                    Data Policy
                  </a>{" "}
                  and{" "}
                  <a href="" className="signup-terms-hyperlink">
                    Cookies Policy
                  </a>
                  . You may receive SMS Notifications from us and can opt out
                  any time.
                </p>
              </div>

              <div className="signup-button-wrapper">
                <input
                  type="submit"
                  className="signup-button"
                  value="Sign Up"
                />
              </div>
            </form>
          </>
        );
    }
}

export default SignupForm;