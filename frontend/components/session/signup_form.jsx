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
            birthday:'1995-6-3',
            month: '6', 
            day: '3', 
            year: '1995', 
            gender: '',
            fname_counter: 0,
            email_counter: 0,
            password_counter: 0,
            reemail_counter: 0,
          existing_email: 'signup-email-exist-error-msg hidden'}
        this.signUpPasswordError = this.signUpPasswordError.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.isValidEmail = this.isValidEmail.bind(this);
        this.error_rendered = false;

    }

    signUpPasswordError() {
      if (this.props.signupErrors[0] && this.props.signupErrors[1]) {
        if (this.props.signupErrors[1].includes('passwordLess') === true) {
          return this.props.signupErrors[0].includes('characters') ? 
            <div className="signup-password-error">
              {this.props.signupErrors[0]}
            </div> : <div></div>;
        }
      }
    }

    handleErrors() {
      if(this.error_rendered === false) {
        if (this.props.signupErrors[1]) {
          this.props.signupErrors[1].forEach((ele) => {
            if (ele === 'gender') {
              $(`div.signup-${ele}-selector`).addClass("signup-form-blur");
            } else if (ele == 'emailExist') {
              this.setState({ existing_email: 'signup-email-exist-error-msg'})
            } else {
              if (ele === "fname") {
                this.setState({ fname_counter: this.state.fname_counter + 1 });
              } else if (ele === "lname") {
                this.setState({ lname_counter: this.state.lname_counter + 1 });
              } else if (ele === "email") {
                this.setState({ email_counter: this.state.email_counter + 1 });
              } else if (ele === "password") {
                this.setState({ password_counter: this.state.password_counter + 1 });
              }
              $(`input.signup-${ele}`).addClass("signup-form-blur");
              $(`div.signup-${ele}-icon`).removeClass("hidden");
            }
          });
          this.error_rendered = true;
        }
      }
    }

    isValidEmail() {
        return this.state.email.includes(".com") ? (
          <>
            <div className="signup-reemail-wrapper">
              <input
                className="signup-reemail"
                type="text"
                placeholder="Re-enter email"
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                onClick={this.handleClick('reemail_counter')}
                onChange={this.handleChange("re_email")}
              />
              <div className="signup-reemail-icon hidden">
                <FontAwesomeIcon className="icon" icon={faExclamationCircle} />
              </div>
              <div className="signup-reemail-error-msg hidden">
                <span className="signup-reemail-error-msg-text">
                  Please re-enter your email-address.
                </span>
                <div className="signup-reemail-error-triangle"></div>
              </div>
            </div>
          </>
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
          if (field === 'first_name' || field === 'last_name') {
            this.setState({ [field]: e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1) })
          }
            if(field === 'gender') {
               $(`div.signup-gender-selector`).removeClass("signup-form-blur");
            }
        }
    }

    handleClick(field) {
      return e => {
        this.setState({ [field]: this.state[field] + 1})
      }
    }
    
    handleFocus(e) {
    
        let class_name = "";
        if (e.target.classList.value.includes("fname")) {
          class_name = "fname";
        } else if (e.target.classList.value.includes("lname")) {
          class_name = "lname";
        } else if (e.target.classList.value.includes("reemail")) {
          class_name = "reemail";
        } else if (e.target.classList.value.includes("email")) {
          class_name = "email";
        } else if (e.target.classList.value.includes("password")) {
          class_name = "password";
        }

        if (this.state.fname_counter >= 1 && e.target.value.length === 0 && class_name === "fname") {
           $(`div.signup-${class_name}-error-msg`).removeClass("hidden");
        } else if (this.state.lname_counter >= 1 && e.target.value.length === 0  && class_name === "lname") {
           $(`div.signup-${class_name}-error-msg`).removeClass("hidden");
        } else if (this.state.reemail_counter >= 1 && e.target.value.length === 0  && class_name === "reemail") {
           $(`div.signup-${class_name}-error-msg`).removeClass("hidden");
        } else if (this.state.email_counter >= 1 && e.target.value.length === 0  && class_name === "email") {
           $(`div.signup-${class_name}-error-msg`).removeClass("hidden");
        } else if (this.state.password_counter >= 1 && e.target.value.length === 0  && class_name === "password") {
           $(`div.signup-${class_name}-error-msg`).removeClass("hidden");
        }
          
        $(`div.signup-${class_name}-icon`).addClass("hidden");
        e.target.classList.remove("signup-form-blur");
        e.target.classList.add("signup-form-focus");

      if (this.state.existing_email === 'signup-email-exist-error-msg') {
        this.setState({ existing_email: 'signup-email-exist-error-msg hidden'})
      }
    }

    handleBlur(e) {
      let class_name= '';
      if (e.target.classList.value.includes("fname")) {
        class_name = 'fname';
      } else if (e.target.classList.value.includes("lname")) {
        class_name = 'lname';
      } else if (e.target.classList.value.includes("reemail")) {
        class_name = "reemail";
      } else if (e.target.classList.value.includes("email")) {
        class_name = 'email';
      } else if (e.target.classList.value.includes("password")) {
        class_name = 'password';
      }

      if (e.target.value.length > 0) {
        $(`div.signup-${class_name}-error-msg`).addClass("hidden");
      }

      if (e.target.value.length === 0) {
        e.target.classList.remove("signup-form-focus");
        e.target.classList.add("signup-form-blur");
        $(`div.signup-${class_name}-icon`).removeClass("hidden");
        $(`div.signup-${class_name}-error-msg`).addClass("hidden");
      }
    }
    
    handleSubmit(e) {
        e.preventDefault();
        if(this.state.email === this.state.re_email) {
            this.props.signup(this.state);
        }
    }

    render() {
        this.handleErrors();

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
              {this.signUpPasswordError()}
            </div>
            <form className="splash-signup-form" onSubmit={this.handleSubmit}>
              <div className="signup-row-one">
                <input
                  className="signup-fname"
                  type="text"
                  placeholder="First name"
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  onClick={this.handleClick("fname_counter")}
                  onChange={this.handleChange("first_name")}
                />
                <div className="signup-fname-icon hidden">
                  <FontAwesomeIcon
                    className="icon"
                    icon={faExclamationCircle}
                  />
                </div>
                <div className="signup-fname-error-msg hidden">
                  <span className="signup-fname-error-msg-text">
                    What's your name?
                  </span>
                  <div className="signup-fname-error-triangle"></div>
                </div>
                <input
                  className="signup-lname"
                  type="text"
                  placeholder="Last name"
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  onChange={this.handleChange("last_name")}
                />
                <div className="signup-lname-icon hidden">
                  <FontAwesomeIcon
                    className="icon"
                    icon={faExclamationCircle}
                  />
                </div>
              </div>

              <div className="signup-email-wrapper">
                <input
                  className="signup-email"
                  type="text"
                  placeholder="Mobile number or email"
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  onClick={this.handleClick("email_counter")}
                  onChange={this.handleChange("email")}
                />
                <div className="signup-email-icon hidden">
                  <FontAwesomeIcon
                    className="icon"
                    icon={faExclamationCircle}
                  />
                </div>
                <div className="signup-email-error-msg hidden">
                  <span className="signup-email-error-msg-text">
                    You'll use this when you log in and if you ever need to
                    reset your password.
                  </span>
                  <div className="signup-email-error-triangle"></div>
                </div>
                <div className={this.state.existing_email}>
                  <span className="signup-email-error-msg-text">
                    The email you've entered already exist, please enter another email.
                  </span>
                  <div className="signup-email-error-triangle"></div>
                </div>
              </div>

              {this.isValidEmail()}
              <div className="signup-password-wrapper">
                <input
                  className="signup-password"
                  type="password"
                  placeholder="New password"
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  onClick={this.handleClick("password_counter")}
                  onChange={this.handleChange("password")}
                />
                <div className="signup-password-icon hidden">
                  <FontAwesomeIcon
                    className="icon"
                    icon={faExclamationCircle}
                  />
                </div>
                <div className="signup-password-error-msg hidden">
                  <span className="signup-password-error-msg-text">
                    Enter a combination of at least six numbers, letters and
                    punctuations(like ! and &).
                  </span>
                  <div className="signup-password-error-triangle"></div>
                </div>
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