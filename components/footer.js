import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import LogoTwitter from '../public/twitter.svg';
import LogoLinkedin from '../public/linkedin.svg';
import LogoYoutube from '../public/youtube.svg';

import { withTranslation, i18n } from '../i18n'

const Footer = ({ t }) => {
  return (
    <React.Fragment>
      <footer>
        <section className="footer">
          <div className="div-address">
            <p>155 Rue boulevard de l'Hôpital <br /> 75013 Paris</p>
            <a onClick={() => i18n.changeLanguage(i18n.language = 'fr')}>Français</a> | <a onClick={() => i18n.changeLanguage(i18n.language = 'en')}>English</a>
          </div>
          <div className="div-social-media">
            <a href="#" target="_blank"><img src={LogoYoutube} className="logo-social-media" alt="youtube" /></a>
            <a href="https://www.linkedin.com/company/geosophy-io/" target="_blank"><img src={LogoLinkedin}
              className="logo-social-media" alt="linkedin" /></a>
            <a href="https://twitter.com/Geosophy1" target="_blank"><img src={LogoTwitter}
              className="logo-social-media" alt="twitter" /></a>
          </div>
          <div className="div-contact">
            <ul className="footer-links">
              <Link href="/contact">
                <li><a className="contact-menu">Contact</a></li>
              </Link>
              <li><a>contact@geosophy.io</a></li>
              <li>06 26 78 42 14</li>
            </ul>
          </div>
          <div className="div-copyright">
            <p>© Copyright 2019 – 2020. {t('droits')}</p>
          </div>

        </section>
      </footer>
      <style jsx>{`
            .footer {
                background-color: #1d222b;
                display: -webkit-box;
                display: flex;
                -webkit-box-orient: horizontal;
                -webkit-box-direction: normal;
                flex-direction: row;
                justify-content: space-around;
                flex-wrap: wrap;
                -webkit-box-align: center;
                align-items: center;
                margin-top: 5%;
              }
              
              .div-address {
                text-align: center;
                width: 33.33%;
                color: white;
                margin-top: 2%;
                line-height: 40px;
              }
              
              .div-address a {
                text-decoration: none;
                color: #57b1dd;
                cursor: pointer;
              }
              
              .div-social-media {
                width: 33.33%;
                display: -webkit-box;
                display: flex;
                -webkit-box-orient: horizontal;
                -webkit-box-direction: normal;
                flex-direction: row;
                -webkit-box-pack: space-evenly;
                justify-content: space-evenly;
                margin-top: 2%;
              }
              
              .div-contact {
                width: 33.33%;
                text-align: center;
                margin-top: 2%;
                line-height: 40px;
              }
              
              .footer-links {
                list-style: none;
              }
              
              .footer-links li {
                text-decoration: none;
                color: white;
              }
              
              .footer-links li a {
                text-decoration: none;
                color: white;
                position: relative;
                cursor: pointer;
              }
              
              .contact-menu::after {
                content: "";
                width: 40px;
                height: 1.5px;
                background: white;
                border-radius: 12px;
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                margin: 0 auto;
                -webkit-transform: translateY(5px);
                transform: translateY(5px);
              }
              
              .logo-social-media {
                width: 150%;
              }
              
              .div-copyright {
                color: white;
                align-self: flex-end;
                text-align: center;
                width: 100%;
                margin-top: 2%;
              }
        
          @media (max-width: 420px) {
            .logo-social-media {
                width: 100%;
              }
        }

          @media (max-width: 768px) {
            .div-social-media {
                width: 100%;
              }

              .logo-social-media {
                width: 100%;
              }
        }
      `}</style>
    </React.Fragment>
  )
}

Footer.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('footer')(Footer)