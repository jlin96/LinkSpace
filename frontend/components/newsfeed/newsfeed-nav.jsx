import React, { useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faHome, faTv, faStore, faUsers, faSortDown, faBell} from "@fortawesome/free-solid-svg-icons";
import { faFlag} from '@fortawesome/free-regular-svg-icons';
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";

class NewsfeedNav extends React.Component {
    constructor(props){
        super(props);
        this.state = {currentHover: '', shown: false};
        this.handleClick = this.handleClick.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.iconMessage = this.iconMessage.bind(this);
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
        let iconLists = ["home", "pages", "watch", "marketplace", "groups", "create", "messanger", "notifications", "account"];
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
            if (cTime - this.state.endTime >= 500) {
               this.setState({ currentHover: currentIcon, shown: true });
            } 
          }.bind(this),
          500
        );
    }


    handleMouseLeave (e) {
        this.setState({endTime: Date.now(), shown: false})
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
       } else if (this.state.shown === true && this.state.currentHover === 'Messanger') {
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

    render() {
        return (
          <header className="newsfeed-nav-bar">
            <img src={window.main_logo} className="newsfeed-nav-logo" />
            <div className="newsfeed-nav-search-bar-wrapper">
              <input
                type="text"
                className="newsfeed-nav-search-bar"
                placeholder="     Search Facebook"
              />
              <FontAwesomeIcon
                className="nav-search-bar-glasses"
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
                  className="user-components user-components-left-spacing messanger"
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
                >
                  <FontAwesomeIcon
                    icon={faSortDown}
                    className="user-component-icon icon-arrow-down"
                  />
                </button>
              </div>
            </div>
            {this.iconMessage()}
          </header>
        );
    }
}

export default NewsfeedNav;