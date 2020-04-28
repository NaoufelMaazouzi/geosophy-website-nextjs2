import React from 'react';
import PropTypes from 'prop-types';
import { i18n, Link, withTranslation } from '../i18n';

import LayoutContact from '../components/layoutContact';

import logoPosition from '../public/position.svg';
import logoTel from '../public/tel.svg';
import logoMail from '../public/mail.svg';
import logoLinkedin from '../public/linkedin2.svg';
import logoYoutube from '../public/youtube2.svg';
import logoTwitter from '../public/twitter2.svg';


const contactPage = ({ t }) => {
  return (
    <React.Fragment>
      <main>
        <section id="contact-section">
          <h2 className="title-section" id="title-cyan">{t('question')}</h2>
          <div className="div-contact-form">
            <div className="message">
              <h4 className="title-message">{t('envoiMessage')}</h4>
              <form id="contact-form" method="POST" action="../php/contact-form-handle.php">
                <input name="name" id="name" type="text" className="form-control" placeholder={t('nom')} required />
                <input name="email" id="email" type="email" className="form-control" placeholder={t('email')} required />
                <input name="mobile" id="mobile" type="tel" className="form-control" placeholder={t('telephone')} required />
                <input name="company" id="company" type="text" className="form-control" placeholder={t('compagnie')} />

                <textarea name="message" id="message" className="form-control" placeholder={t('message')} rows="6"
                  required></textarea>

                <input type="submit" className="submit" name="submit" onclick="validation()" />

              </form>
            </div>
            <div className="informations">
              <h4 className="title-informations">{t('informationsTitle')}</h4>
              <p className="text-informations"><img src={logoPosition} className="img-informations" alt="position" />155 Boulevard de
                    l'Hôpital, 75013 Paris</p>
              <p className="text-informations"><img src={logoTel} className="img-informations" alt="telephone" />06 26 78 42 14</p>
              <p className="text-informations"><img src={logoMail} className="img-informations" alt="mail" />contact@geosophy.io</p>
              <div className="logo-informations">
                <a href="https://www.linkedin.com/company/geosophy-io/" aria-label="linkedin" target="_blank"><img
                  src={logoLinkedin} className="logo-contact" alt="linkedin" /></a>
                <a href="#" target="_blank" aria-label="youtube"><img src={logoYoutube} className="logo-contact" alt="youtube" /></a>
                <a href="https://twitter.com/Geosophy1" aria-label="twitter" target="_blank"><img src={logoTwitter}
                  className="logo-contact" alt="twitter" /></a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <style jsx>{`
#contact-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .title-section {
    font-size: 3rem;
    padding-top: 5%;
    position: relative;
    text-align: center;
    font-family: bahnschrift;
    font-weight: 400;
    width: 100%;
  }
  
  #title-cyan::after {
    content: "";
    width: 120px;
    height: 3px;
    background: #00736d;
    border-radius: 12px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    -webkit-transform: translateY(10px);
    transform: translateY(10px);
  }
  
  .div-contact-form {
    width: 80%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 10%;
    margin-bottom: 10%;
    -webkit-box-shadow: 0px 0px 54px -2px rgba(0, 0, 0, 0.32);
    -moz-box-shadow: 0px 0px 54px -2px rgba(0, 0, 0, 0.32);
    box-shadow: 0px 0px 54px -2px rgba(0, 0, 0, 0.32);
  }
  
  .message {
    text-align: center;
    width: 70%;
  }
  
  .title-message {
    width: 100%;
    font-size: 1.8rem;
    color: black;
    padding-top: 35px;
    font-family: "Red Hat Display", sans-serif;
  }
  
  .title-informations {
    font-size: 1.7rem;
    width: 80%;
    color: white;
    padding-top: 35px;
    font-family: "Red Hat Display", sans-serif;
  }
  
  .informations {
    background-color: #00736d;
    width: 30%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: justify;
    text-align: justify;
  }
  
  .text-informations {
    width: 100%;
    margin: 5%;
    font-size: 1.1rem;
    color: white;
    font-family: "Red Hat Display", sans-serif;
  }
  
  .logo-informations {
    width: 80%;
    margin-left: 5%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  
  .img-informations {
    padding-right: 5%;
  }
  
  #contact-form {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
  }
  
  .form-control {
    width: 40%;
    background: transparent;
    border: none;
    outline: none;
    border-bottom: 1px solid black;
    color: black;
    font-size: 1.4rem;
    margin-bottom: 16px;
    margin-top: 5%;
    font-family: "Roboto", sans-serif;
  }
  
  .submit {
    width: 21%;
    background: #00736d;
    border: none;
    outline: none;
    color: black;
    font-size: 1.2rem;
    margin-top: 5%;
    margin-bottom: 16px;
    border-radius: 2px;
    cursor: pointer;
    color: white;
    font-family: "Red Hat Display", sans-serif;
    transition: all 0.3s ease;
  }
  
  .submit:hover {
    background: #009e97;
  }
  
  #message {
    width: 90%;
  }
  
  input {
    height: 45px;
  }
  
  ::placeholder {
    color: rgb(141, 141, 141);
    opacity: 1;
  }

  @media (max-width: 768px) {
    /* Contact section */
  .form-control {
    width: 80%;
  }

  #contact-form {
    justify-content: center;
  }

  #message {
    width: 80%;
  }

  .message {
    width: 100%;
  }

  .informations {
    width: 100%;
    height: 500px;
    text-align: center;
  }

  .img-informations {
    display: none;
  }

  .text-informations,
  .logo-informations {
    margin-left: 0;
  }

  .text-informations {
    font-size: 1.7rem;
  }

  .title-informations {
    text-align: center;
    font-size: 2rem;
  }
  }
      `}</style>
    </React.Fragment>
  )
}

contactPage.Layout = LayoutContact;


export default withTranslation('contact')(contactPage)