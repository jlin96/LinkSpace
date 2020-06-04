import React from 'react';
import { Link } from 'react-router-dom';
import LoginFormContainer from '../session/login_form_container';
import SigninFormContainer from '../session/signup_form_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faShareSquare, faCompass } from '@fortawesome/free-regular-svg-icons';

const Splash = () => {
    return (
      <div className="splash-page">
        <header className="splash-header">
          <div className="splash-header-content">
            <div className="splash-logo">
              <p>linkspace</p>
            </div>
            <div className="splash-login-wrapper">
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
                <span className="newspaper-text-2">
                  {" "}
                  from friends in News Feed.
                </span>
              </span>
              <span className="splash-share">
                <FontAwesomeIcon icon={faShareSquare} className="share-icon" />
                <span className="share-text">Share what's new</span>
                <span className="share-text-2">
                  {" "}
                  in your life on your Timeline.
                </span>
              </span>
              <span className="splash-find">
                <FontAwesomeIcon icon={faCompass} className="find-icon" />
                <span className="find-text">Find more</span>
                <span className="find-text-2">
                  {" "}
                  of what you're looking for with Facebook Search.
                </span>
              </span>
            </div>
            <div className="splash-main-right">
              <label className="signup-header">Sign Up</label>
              <label className="signup-header-2">It’s quick and easy.</label>
              <div>
                <SigninFormContainer />
              </div>
              <p className="splash-create-page">
                <a href="" className="create-page-hyperlink">
                  Create a Page
                </a>{" "}
                for a celebrity, band or business.
              </p>
            </div>
          </div>
        </main>
        <footer className="splash-footer">
          <ul className="splash-footer-languages">
            <li className="languages-li-first">English (US)</li>
            <li className="languages-li">
              <a href="">Español</a>
            </li>
            <li className="languages-li">
              <a href="">Français (France)</a>
            </li>
            <li className="languages-li">
              <a href="">中文(简体)</a>
            </li>
            <li className="languages-li">
              <a href="">العربية</a>
            </li>
            <li className="languages-li">
              <a href="">Português (Brasil)</a>
            </li>
            <li className="languages-li">
              <a href="">한국어</a>
            </li>
            <li className="languages-li">
              <a href="">Italiano</a>
            </li>
            <li className="languages-li">
              <a href="">Deutsch</a>
            </li>
            <li className="languages-li">
              <a href="">हिन्दी</a>
            </li>
            <li className="languages-li">
              <a href="">日本語</a>
            </li>
            <li className="languages-li languages-plus">
              <a href="" className="languages-plus-text">
                +
              </a>
            </li>
          </ul>
          <div className="splash-footer-divider"></div>

          <ul className="splash-footer-services">
            <div className="services-rows">
              <li className="services-li services-li-first">
                <a href="">Sign Up</a>
              </li>
              <li className="services-li">
                <a href="">Log In</a>
              </li>
              <li className="services-li">
                <a href="">Messenger</a>
              </li>
              <li className="services-li">
                <a href="">Facebook Lite</a>
              </li>
              <li className="services-li">
                <a href="">Watch</a>
              </li>
              <li className="services-li">
                <a href="">People</a>
              </li>
              <li className="services-li">
                <a href="">Pages</a>
              </li>
              <li className="services-li">
                <a href="">Page Categories</a>
              </li>
              <li className="services-li">
                <a href="">Places</a>
              </li>
              <li className="services-li">
                <a href="">Games</a>
              </li>
              <li className="services-li">
                <a href="">Locations</a>
              </li>
              <li className="services-li">
                <a href="">Marketplace</a>
              </li>
              <li className="services-li">
                <a href="">Groups</a>
              </li>
              <li className="services-li">
                <a href="">Portal</a>
              </li>
            </div>
            <div className="services-rows">
              <li className="services-li services-li-first">
                <a href="">Instagram</a>
              </li>
              <li className="services-li">
                <a href="">Local</a>
              </li>
              <li className="services-li">
                <a href="">Fundraisers</a>
              </li>
              <li className="services-li">
                <a href="">Services</a>
              </li>
              <li className="services-li">
                <a href="">About</a>
              </li>
              <li className="services-li">
                <a href="">Create Ad</a>
              </li>
              <li className="services-li">
                <a href="">Create Page</a>
              </li>
              <li className="services-li">
                <a href="">Developers</a>
              </li>
              <li className="services-li">
                <a href="">Careers</a>
              </li>
              <li className="services-li">
                <a href="">Privacy</a>
              </li>
              <li className="services-li">
                <a href="">Cookies</a>
              </li>
              <li className="services-li">
                <a href="">Ad Choices</a>
              </li>
              <li className="services-li">
                <a href="">Terms</a>
              </li>
              <li className="services-li">
                <a href="">Help</a>
              </li>
            </div>
          </ul>

          <span className="splash-footer-copyright">
            <p className="copyright-text">Jesse Lin © 2020</p>
          </span>
        </footer>
      </div>
    );
}

export default Splash;