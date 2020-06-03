import React from 'react';
import { Link } from 'react-router-dom';
import LoginFormContainer from '../session/login_form_container';
import SigninFormContainer from '../session/signup_form_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faShareSquare, faCompass } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from "@fortawesome/free-solid-svg-icons";


const Splash = () => {
    return (
      <div className="splash-page">
        <header className="splash-header">
          <div className="splash-header-content">
            <div className="splash-logo">
              <p>linkspace</p>
            </div>
            <div>
              <LoginFormContainer />
            </div>
          </div>
        </header>
        <main className="splash-main">
          <div className="splash-main-content">
            <div className="splash-main-left">
              <span className="splash-connect">
                Connect with friends and the world around you on Linkspace.
              </span>
              <span className="splash-newfeed">
                <FontAwesomeIcon
                  icon={faNewspaper}
                  className="newspaper-icon"
                />
                <span className="newspaper-text">See photos and updates</span>
                <span className="newspaper-text-2"> from friends in News Feed.</span>
              </span>
              <span className="splash-share">
                <FontAwesomeIcon icon={faShareSquare} className="share-icon" />
                <span className="share-text">Share what's new</span>
                <span className="share-text-2"> in your life on your Timeline.</span>
              </span>
              <span className="splash-find">
                <FontAwesomeIcon icon={faCompass} className="find-icon" />
                <span className="find-text">Find more</span>
                <span className="find-text-2"> of what you're looking for with Facebook Search.</span>
              </span>
            </div>
            <div className="splash-main-right">
							<label className="signup-header">Sign Up</label>
							<label className="signup-header-2">It’s quick and easy.</label>
              <div>
                <SigninFormContainer />
              </div>
            </div>
          </div>
        </main>
        <footer></footer>
      </div>
    );
}

export default Splash;