import React from 'react';
import PropTypes from 'prop-types';
import { i18n, Link, withTranslation } from '../i18n';

import logoCovivio from '../public/covivio2.png';
import logoIcade from '../public/icade.png';
import logoUnion from '../public/Union-Investment.png';
import logoLamotte from '../public/lamotte.png';
import logoCovea from '../public/covea.png';
import logoFrancaise from '../public/La-Francaise-logo.png';
import headBand from '../public/Bandeau-Geosophy2.jpg';
import LayoutGeosophy from '../components/layoutGeosophy';


function Homepage({ t }) {
  return (
    <React.Fragment>
      <main>
        <section id="presentation-section">
          <h2 className="title-section">{t('main.titleIndex1')}</h2>
          <div className="div-text-subhead">
            <p className="first-text-subhead">{t('main.geoenergisez')}</p>
            <p className="second-text-subhead">{t('main.geoenergisez2')}</p>
          </div>
        </section>
        <section className="headband-section">
          <p className="headband-hook">{t('main.headbandHook')}</p>
        </section>
        <section className="call-action-section">
          <h2 className="title-section">{t('main.titleIndex2')}</h2>
          <div className="div-text-subhead">
            <p className="first-text-subhead">{t('main.textLogiciel1')}</p>
            <p className="second-text-subhead">{t('main.textLogiciel2')}</p>
            <p className="second-text-subhead">{t('main.textLogiciel3')}</p>
          </div>
          <div className="div-call-action">
            <h3 className="title-call-action">{t('main.analyser2')}</h3>
            <a href="https://app.geosophy.io/auth/login" target="_blank" className="button blueButton" aria-label="essai">{t('main.essaiButton')}</a>
          </div>
        </section>
        <section className="references-section">
          <div className="div-call-action">
            <h2 className="title-call-action">{t('main.confianceTitle')}</h2>
          </div>
          <div className="slider">
            <div className="slide">
              <img src={logoIcade} alt="logo Icade" />
              <img src={logoCovea} alt="logo Covea" />
              <img src={logoUnion} alt="logo Union" />
              <img src={logoCovivio} alt="logo Covivio" />
              <img src={logoLamotte} alt="logo Lamotte" />
              <img src={logoFrancaise} alt="logo Francaise" />
            </div>
            <div className="slide">
              <img src={logoIcade} alt="logo Icade" />
              <img src={logoCovea} alt="logo Covea" />
              <img src={logoUnion} alt="logo Union" />
              <img src={logoCovivio} alt="logo Covivio" />
              <img src={logoLamotte} alt="logo Lamotte" />
              <img src={logoFrancaise} alt="logo Francaise" />
            </div>
          </div>
        </section>
      </main>
      <style jsx>{`
        /***************************************** PRESENTATION SECTION *****************************************/

        #presentation-section {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -ms-flex-direction: column;
              flex-direction: column;
          -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
              justify-content: center;
        }
        
        .title-section {
          font-size: 3rem;
          padding-top: 5%;
          position: relative;
          text-align: center;
          font-family: bahnschrift;
          font-weight: 400;
          width: 80%;
        }
        
        .title-section::after {
          content: "";
          width: 120px;
          height: 1.5px;
          background: black;
          border-radius: 12px;
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          margin: 0 auto;
          -webkit-transform: translateY(10px);
          -ms-transform: translateY(10px);
              transform: translateY(10px);
        }
        
        .div-text-subhead {
          width: 80%;
          margin-top: 5%;
          margin-bottom: 8%;
          text-align: center;
          font-family: "Roboto", sans-serif;
          font-weight: 300;
          color: #4a4a4a;
        }
        
        .first-text-subhead,
        .second-text-subhead {
          font-size: 1.3rem;
        }
        
        .second-text-subhead {
          margin-top: 5%;
        }
        
        /***************************************** HEADBAND SECTION*****************************************/
        
        .headband-section {
          background-image: url(${headBand});
          box-shadow: 0 10px 20px rgba(0,0,0,.15);
          background-position: center center;
          background-size: cover;
          background-repeat: no-repeat;
          height: 80vh;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: horizontal;
          -webkit-box-direction: normal;
          -ms-flex-direction: row;
              flex-direction: row;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
              justify-content: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
        }
        
        .headband-hook {
          text-align: center;
          font-size: 4rem;
          color: white;
          font-family: bahnschrift;
          font-weight: 700;
          margin: 5% 5%;
        }
        
        /***************************************** CALL TO ACTION SECTION *****************************************/
        
        .call-action-section {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -ms-flex-direction: column;
              flex-direction: column;
          -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
              justify-content: center;
        }
        
        .div-call-action {
          text-align: center;
          width: 80%;
          margin-top: 5%;
        }
        
        .title-call-action {
          font-size: 2rem;
          text-align: center;
          padding-bottom: 3%;
          font-family: "Red Hat Display", sans-serif;
        }
        
        .button {
          border: none;
          color: white;
          padding: 15px 32px;
          margin-bottom: 5%;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
          margin: 4px 2px;
          cursor: pointer;
          border-radius: 4px;
          margin-bottom: 5%;
          display: inline-block;
        }
        
        .blueButton {
          background-color: #57b1dd;
          -webkit-transition: all 0.3s ease;
          -o-transition: all 0.3s ease;
          transition: all 0.3s ease;
        }
        
        .blueButton:hover {
          background-color: #2c92c5;
        }
        
        .greenButton {
          background-color: #7bd444;
          -webkit-transition: all 0.3s ease;
          -o-transition: all 0.3s ease;
          transition: all 0.3s ease;
        }
        
        .greenButton:hover {
          background-color: #549e25;
        }
        
        /***************************************** REFERENECES SECTION *****************************************/
        
        .references-section {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: horizontal;
          -webkit-box-direction: normal;
          -ms-flex-direction: row;
              flex-direction: row;
          -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
          -ms-flex-pack: distribute;
              justify-content: space-around;
          -ms-flex-wrap: wrap;
              flex-wrap: wrap;
          margin-top: 5%;
          margin-bottom: 10%;
          /*background-color: #f5f5f5;*/
        }
        
        .slider {
          width: 80%;
          height: 100px;
          position: relative;
          background: white;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          overflow: hidden;
        }

        .slide {
          height: 100px;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: center;
              -ms-flex-align: center;
                  align-items: center;
          -webkit-animation: slideshow 40s linear infinite;
                  animation: slideshow 40s linear infinite;
        }

        .slide img {
          height: 70px;
          padding: 0 50px 0 50px;
        }
        
        @-webkit-keyframes slideshow {
          0% {
            -webkit-transform: translateX(0);
                    transform: translateX(0);
          }
          100% {
            -webkit-transform: translateX(-100%);
                    transform: translateX(-100%);
          }
        }
        
        @keyframes slideshow {
          0% {
            -webkit-transform: translateX(0);
                    transform: translateX(0);
          }
          100% {
            -webkit-transform: translateX(-100%);
                    transform: translateX(-100%);
          }
        }

        .slider::before,
        .slider::after {
          height: 100px;
          width: 200px;
          position: absolute;
          content: "";
          background: -webkit-gradient(linear, left top, right top, from(white), to(rgba(255, 255, 255, 0)));
          background: -o-linear-gradient(left, white 0%, rgba(255, 255, 255, 0) 100%);
          background: linear-gradient(to right, white 0%, rgba(255, 255, 255, 0) 100%);
          z-index: 1;
        }

        .slider::before {
          left: 0;
          top: 0;
        }
        
        .slider::after {
          right: 0;
          top: 0;
          -webkit-transform: rotateZ(180deg);
              -ms-transform: rotate(180deg);
                  transform: rotateZ(180deg);
        }

        @media (max-width: 420px) { 
          /* Presentation section */
            .div-text-subhead {
              margin-top: 15%;
              margin-bottom: 15%;
            }

          /* Call to action section */
            .div-call-action {
              margin: 5% 5%;
            }
      }

      @media (max-width: 768px) { 
          /* Presentation section */
      .first-text-subhead,
      .second-text-subhead {
        font-size: 2.4rem;
        text-align: justify;
      }

      /* References section */
      .div-img {
        width: 40%;
        margin-top: 10%;
      }

      .slide img {
        height: 30px;
        padding: 0 30px 0 30px;
      }

      .slide {
        -webkit-animation: slideshow 20s linear infinite;
                animation: slideshow 20s linear infinite;
      }

      .slider::before,
      .slider::after {
        width: 100px;
      }
}
      `}</style>
    </React.Fragment>
  )
}

Homepage.Layout = LayoutGeosophy;

Homepage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

Homepage.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Homepage)