import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faHome, faTv, faStore, faUsers, faSortDown, faBell, faExclamation, faCommentAlt, faCog, faSignOutAlt, faQuestionCircle} from "@fortawesome/free-solid-svg-icons";
import { faFlag} from '@fortawesome/free-regular-svg-icons';
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
    constructor(props){
        super(props);
      this.state = { 
        currentHover: "", 
        shown: false, 
        showDropDown: false, 
        glasses_icon: "nav-search-bar-glasses", 
        endTime: 0,
        table_top: 'dropdown-menu-shadow-top hidden',
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
      };
        this.handleClick = this.handleClick.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.iconMessage = this.iconMessage.bind(this);
        this.dropdownMenu = this.dropdownMenu.bind(this);
        this.createDropdownMenu = this.createDropdownMenu.bind(this);
        this.addHiddenToGlasses = this.addHiddenToGlasses.bind(this);
        this.removeHiddenGlasses = this.removeHiddenGlasses.bind(this);
        this.addHiddenToDropdown = this.addHiddenToDropdown.bind(this);
    }

    handleClick(e) {
        let iconLists = ["home", "pages", "watch", "marketplace", "groups"];
        e.target.classList.add('icon-selected');
        iconLists.forEach( icon => {
            if (e.target.classList.value.includes(icon) === false) {
                $(`button.${icon}`).removeClass("icon-selected", 'nav-main-secondary-bottom');
                $(`button.${icon}`).addClass("nav-main-inner-button");
                $(`li.${icon}`).removeClass("nav-main-primary-bottom");
                $(`li.${icon}`).addClass("nav-main");
            } else {
                $(`button.${icon}`).addClass('nav-main-secondary-bottom');
                $(`button.${icon}`).removeClass("nav-main-inner-button");
                $(`li.${icon}`).addClass("nav-main-primary-bottom");
                $(`li.${icon}`).removeClass("nav-main");
            }
        })
    }

    handleMouseEnter(e) {
        let iconLists = ["home", "pages", "watch", "marketplace", "groups", "create", "messenger", "notifications", "account"];
        let currentIcon = ''
        iconLists.forEach( icon => {
            if (e.target.classList.value.includes(icon)) {
                currentIcon = icon.charAt(0).toUpperCase() + icon.slice(1);
            }
        })
        let beforeTime = Date.now();
        setTimeout(
          function () {
            let cTime = Date.now();
            if (cTime - this.state.endTime < 500) {
            } else if (cTime - beforeTime >= 500) {
              this.setState({ currentHover: currentIcon, shown: true });
            } 
          }.bind(this), 500);
    }


    handleMouseLeave (e) {
        this.setState({shown: false, endTime: Date.now()})
    }

    iconMessage() {
       if(this.state.shown === true && this.state.currentHover === 'Home') {
            return (
                <div className="icon-messages icon-messages-home">{this.state.currentHover}</div>
            )
       } else if (this.state.shown === true && this.state.currentHover === 'Pages') {
           return (
             <div className="icon-messages icon-messages-pages">{this.state.currentHover}</div>
           );
       } else if (this.state.shown === true && this.state.currentHover === 'Watch') {
           return (
             <div className="icon-messages icon-messages-watch">{this.state.currentHover}</div>
           );
       } else if (this.state.shown === true && this.state.currentHover === 'Marketplace') {
           return (
             <div className="icon-messages icon-messages-marketplace">{this.state.currentHover}</div>
           );
       } else if (this.state.shown === true && this.state.currentHover === 'Groups') {
           return (
             <div className="icon-messages icon-messages-groups">{this.state.currentHover}</div>
           );
       } else if (this.state.shown === true && this.state.currentHover === 'Create') {
           return (
             <div className="icon-messages icon-messages-create">{this.state.currentHover}</div>
           );
       } else if (this.state.shown === true && this.state.currentHover === 'Messenger') {
           return (
             <div className="icon-messages icon-messages-messanger">{this.state.currentHover}</div>
           );
       } else if (this.state.shown === true && this.state.currentHover === 'Notifications') {
           return (
             <div className="icon-messages icon-messages-notifications">{this.state.currentHover}</div>
           );
       } else if (this.state.shown === true && this.state.currentHover === 'Account') {
           return (
             <div className="icon-messages icon-messages-account">{this.state.currentHover}</div>
           );
       } 
       return <div></div>
    }

    dropdownMenu () {
      if (this.state.showDropDown) {
        this.setState({ showDropDown: false, table_top: 'dropdown-menu-shadow-top hidden' });
      } else {
        this.setState({ showDropDown: true, table_top: 'dropdown-menu-shadow-top' });
      }
    }

    createDropdownMenu() {
      const full_name = this.props.users[this.props.currentUser].first_name + ' ' + this.props.users[this.props.currentUser].last_name;
      return ( 
        <div
          className={this.state.table_top}
          tabIndex="1"
        >

          <div className={this.state.table}>

            <Link to={`users/${this.props.currentUser}`}>
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
            </Link>

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
                      <input type="checkbox" />
                      <span className="slider round"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className={this.state.dropdown_outer_wrapper} onClick={this.props.logout}>
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
      )
    }

    addHiddenToGlasses() {
      this.setState({ glasses_icon: 'nav-search-bar-glasses hiddenGlasses'})
    }

    removeHiddenGlasses() { 
      this.setState({ glasses_icon: 'nav-search-bar-glasses' })
    }

    addHiddenToDropdown(e) {
      // debugger
      const actualClick = e.relatedTarget
      if (actualClick !== e.target && !e.target.contains(e.relatedTarget)) {
        this.setState({ table_top: 'dropdown-menu-shadow-top hidden' })
      }
    }

    render() {
        return (
          <header className="newsfeed-nav-bar">
            <Link to="/"><img src={window.main_logo} className="newsfeed-nav-logo"/></Link>
            <div className="newsfeed-nav-search-bar-wrapper" onClick={this.addHiddenToGlasses} onBlur={this.removeHiddenGlasses}>
              <input
                type="text"
                className="newsfeed-nav-search-bar"
                placeholder="     Search Facebook"
              />
              <FontAwesomeIcon
                className={this.state.glasses_icon}
                icon={faSearch}
              />
            </div>
            <ul className="newsfeed-nav-main">
              <li className="nav-main-primary-bottom home">
                <button
                  className="nav-main-secondary-bottom home icon-selected"
                  onClick={this.handleClick}
                  onMouseEnter={this.handleMouseEnter}
                  onMouseLeave={this.handleMouseLeave}
                >
                  <FontAwesomeIcon className="nav-icons" icon={faHome} />
                </button>
              </li>
              <li className="nav-main pages">
                <button
                  className="nav-main-inner-button pages"
                  onClick={this.handleClick}
                  onMouseEnter={this.handleMouseEnter}
                  onMouseLeave={this.handleMouseLeave}
                >
                  <FontAwesomeIcon className="nav-icons" icon={faFlag} />
                </button>
              </li>
              <li className="nav-main watch">
                <button
                  className="nav-main-inner-button watch"
                  onClick={this.handleClick}
                  onMouseEnter={this.handleMouseEnter}
                  onMouseLeave={this.handleMouseLeave}
                >
                  <FontAwesomeIcon
                    className="nav-main-tv nav-icons"
                    icon={faTv}
                  />
                </button>
              </li>
              <li className="nav-main marketplace">
                <button
                  className="nav-main-inner-button marketplace"
                  onClick={this.handleClick}
                  onMouseEnter={this.handleMouseEnter}
                  onMouseLeave={this.handleMouseLeave}
                >
                  <FontAwesomeIcon
                    className="nav-main-store nav-icons"
                    icon={faStore}
                  />
                </button>
              </li>
              <li className="nav-main groups last-nav-main-li">
                <button
                  className="nav-main-inner-button groups"
                  onClick={this.handleClick}
                  onMouseEnter={this.handleMouseEnter}
                  onMouseLeave={this.handleMouseLeave}
                >
                  <FontAwesomeIcon
                    className="nav-main-users nav-icons"
                    icon={faUsers}
                  />
                </button>
              </li>
            </ul>

            <div className="newsfeed-nav-user-nav">
              <div className="user-nav-components">

                <Link to={`/users/${this.props.currentUser}`}>
                  <div className="user-profile-headshot">
                    <img className="newsfeed-headshot"src={window.headshot} />
                    <div className="newsfeed-name">
                      {this.props.users[this.props.currentUser].first_name}
                    </div>
                  </div>
                </Link>

                <button
                  type="submit"
                  className="user-components user-components-left-spacing create"
                  onMouseEnter={this.handleMouseEnter}
                  onMouseLeave={this.handleMouseLeave}
                >
                  <span className="user-component-icon icon-plus">+</span>
                </button>
                <button
                  type="submit"
                  className="user-components user-components-left-spacing messenger"
                  onMouseEnter={this.handleMouseEnter}
                  onMouseLeave={this.handleMouseLeave}
                >
                  <FontAwesomeIcon
                    icon={faFacebookMessenger}
                    className="user-component-icon icon-messanger"
                    onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}
                  />
                </button>
                <button
                  type="submit"
                  className="user-components user-components-left-spacing notifications"
                  onMouseEnter={this.handleMouseEnter}
                  onMouseLeave={this.handleMouseLeave}
                >
                  <FontAwesomeIcon
                    icon={faBell}
                    className="user-component-icon icon-bell"
                  />
                </button>
                <button
                  type="submit"
                  className="user-components user-components-left-spacing account"
                  onMouseEnter={this.handleMouseEnter}
                  onMouseLeave={this.handleMouseLeave}
                  tabIndex="1"
                  onClick={this.dropdownMenu}
                  onBlur={this.addHiddenToDropdown}
                >
                  <FontAwesomeIcon
                    icon={faSortDown}
                    className="user-component-icon icon-arrow-down"
                  />
                  {this.createDropdownMenu()}
                </button>
              </div>
            </div>
            {this.iconMessage()}
          </header>
        );
    }
}

export default NavBar;