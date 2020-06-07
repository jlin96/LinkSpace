import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation, faCommentAlt, faCog, faSignOutAlt, faQuestionCircle} from "@fortawesome/free-solid-svg-icons";
class AccountDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            table_top: 'dropdown-menu-shadow-top',
            table: 'dropdown-menu',
            dropdown_outer_wrapper: 'dropdown-components-outer-wrapper',
            dropdown_inner_wrapper: 'dropdown-components-inner-wrapper',
            dropdown_user_outer_wrapper: 'dropdown-components-outer-wrapper dropdown-components-user-outer-wrapper',
            dropdown_components: 'dropdown-components',
            user_profile_picture: 'dropdown-user-profile-picture',
            user_name_wrapper: 'dropdown-user-name-wrapper',
            user: 'dropdown-user-name',
            see_profile: 'dropdown-see-profile',
            divider: 'dropdown-divider',
            dropdown_icon_container: 'dropdown_icon_container',
            feedback_wrapper: 'dropdown-feedback-wrapper',
            feedback: 'dropdown-feedback',
            improve_facebook: 'dropdown-improve-facebook',
            icon_comment_alt: 'dropdown-icon-comment-alt',
            icon_exclamation: 'dropdown-icon-exclamation',
            icon_cog: 'dropdown-icon-cog',
            icon_circle: 'dropdown-icon-circle',
            icon_signout: 'dropdown-icon-signout',
            icon_question_circle: 'dropdown-icon-question-circle',
            last_single_row: 'dropdown-last-single-row',
            single_row_font: 'dropdown-single-row-font',
            greater_than: 'dropdown-greater-than',
            logout: 'dropdown-logout'
        }
        this.logoutUser = this.logoutUser.bind(this);

    }

    logoutUser () {
        this.props.logout();
    }

    render() {
        const {first_name, last_name} = this.props.currentUser;
        const full_name = first_name + ' ' + last_name;
        return (
            <>
                <div className={this.state.table_top}>
                    <div className={this.state.table}>

                        <div className={this.state.dropdown_user_outer_wrapper}>
                            <div className={this.state.dropdown_inner_wrapper}>
                                <div className={this.state.dropdown_components}>
                                    <img className={this.state.user_profile_picture} src={window.headshot} />
                                    <div className={this.state.user_name_wrapper}>
                                        <span className={this.state.user}>
                                            {full_name}
                                        </span>
                                        <span className={this.state.see_profile}>
                                            See your profile
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={this.state.divider}></div>
                        
                        <div className={this.state.dropdown_outer_wrapper}>
                            <div className={this.state.dropdown_inner_wrapper}>
                                <div className={this.state.dropdown_components}>
                                    <div className={this.state.dropdown_icon_container}>
                                        <FontAwesomeIcon className={this.state.icon_comment_alt} icon={faCommentAlt} />
                                        <FontAwesomeIcon className={this.state.icon_exclamation} icon={faExclamation} />
                                    </div>
                                    <div className={this.state.feedback_wrapper}>
                                        <span className={this.state.feedback}>
                                            Give Feedback
                                        </span>
                                        <span className={this.state.improve_facebook}>
                                            Help us improve the new Facebook.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={this.state.divider}></div>

                        <div className={this.state.dropdown_outer_wrapper}>
                            <div className={this.state.dropdown_inner_wrapper}>
                                <div className={this.state.dropdown_components}>
                                    <div className={this.state.dropdown_icon_container}>
                                        <FontAwesomeIcon className={this.state.icon_cog} icon={faCog} />
                                    </div>
                                    <div className={this.state.last_single_row}>
                                        <span className={this.state.single_row_font} >
                                            Settings & Privacy
                                        </span>
                                        <span className={this.state.greater_than}>
                                            >
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={this.state.dropdown_outer_wrapper}>
                            <div className={this.state.dropdown_inner_wrapper}>
                                <div className={this.state.dropdown_components}>
                                    <div className={this.state.dropdown_icon_container}>
                                        <FontAwesomeIcon className={this.state.icon_question_circle} icon={faQuestionCircle} />
                                    </div>
                                    <div className={this.state.last_single_row}>
                                        <span className={this.state.single_row_font} >
                                            Help & Support
                                        </span>
                                        <span className={this.state.greater_than}>
                                            >
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={this.state.dropdown_outer_wrapper}>
                            <div className={this.state.dropdown_inner_wrapper}>
                                <div className={this.state.dropdown_components}>
                                    <div className={this.state.dropdown_icon_container}>
                                        <FontAwesomeIcon className={this.state.icon_question_circle} icon={faQuestionCircle} />
                                    </div>
                                    <div className={this.state.last_single_row}>
                                        <span className={this.state.single_row_font} >
                                            Dark Mode
                                        </span>
                                        <label className="switch">
                                            <input type="checkbox"/>
                                            <span className="slider round"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={this.state.dropdown_outer_wrapper} onClick={this.logoutUser}>
                            <div className={this.state.dropdown_inner_wrapper}>
                                <div className={this.state.dropdown_components}>
                                    <div className={this.state.dropdown_icon_container}>
                                        <FontAwesomeIcon className={this.state.icon_signout} icon={faSignOutAlt} />
                                    </div>
                                    <span className={this.state.logout} >
                                        Logout
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </>
        )
    }
}

export default AccountDropdown;