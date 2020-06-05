import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faHome, faTv, faStore, faUsers } from "@fortawesome/free-solid-svg-icons";
import { faFlag} from '@fortawesome/free-regular-svg-icons';

class NewsfeedNav extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        // this.iconLists = ['home', 'flag', 'tv', 'store', 'users']
    }

    handleClick(e) {
        let iconLists = ["home", "flag", "tv", "store", "users"];
        let idxToRemove = 0;
        e.target.classList.add('icon-selected');
        iconLists.forEach( (icon, idx) => {
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
            <FontAwesomeIcon className="nav-search-bar-glasses" icon={faSearch} />
            </div>
            <ul className="newsfeed-nav-main">
                <li className="nav-main-primary-bottom home">
                    <button className="nav-main-secondary-bottom home icon-selected" onClick={this.handleClick}>
                        <FontAwesomeIcon className="nav-icons" icon={faHome} />
                    </button>
                </li>
                <li className="nav-main flag">
                    <button className="nav-main-inner-button flag" onClick={this.handleClick}>
                        <FontAwesomeIcon className="nav-icons" icon={faFlag} />
                    </button>
                </li>
                <li className="nav-main tv">
                    <button className="nav-main-inner-button tv" onClick={this.handleClick}>
                        <FontAwesomeIcon className="nav-main-tv nav-icons" icon={faTv} />
                    </button>
                </li>
                <li className="nav-main store">
                    <button className="nav-main-inner-button store" onClick={this.handleClick}>
                        <FontAwesomeIcon className="nav-main-store nav-icons" icon={faStore} />
                    </button>
                </li>
                <li className="nav-main users last-nav-main-li">
                    <button className="nav-main-inner-button users" onClick={this.handleClick}>
                        <FontAwesomeIcon className="nav-main-users nav-icons" icon={faUsers} />
                    </button>
                </li>
            </ul>
        </header>
        )
    }
}

export default NewsfeedNav;