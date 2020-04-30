import React from 'react';
import PropTypes from 'prop-types';
import { i18n, Link, withTranslation } from '../i18n';
import imgSchemas from '../public/schémas1.jpg';
import LayoutGeoenergie from '../components/layoutGeoenergie';
import { motion } from "framer-motion"



function geoenergiePage({ t }) {
  return (
    <React.Fragment>
      <main>
        <section id="presentation-section">
          <h2 className="title-section" id="title-green">{t('geo-energie.geoenergieTitle')}</h2>
          <div className="div-text-subhead">
            <p className="first-text-subhead" id="geoPresentation">{t('geo-energie.geoPresentation')}</p>
          </div>
        </section>

        <section className="schemas-section">
          <div className="div-schemas">
            <div className="div-img-schemas">
              <a href="#" aria-label="schemas"><img className="img-schemas" src={require('../public/schémas1.jpg')} alt="schemas" /></a>
            </div>
            <div className="div-text-schemas">
              <h3 className="title-schemas">Lorem ipsum</h3>
              <p className="text-schemas">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed sapien
              tempus, convallis
              nisi ut, sollicitudin justo. Sed non tellus in lacus sollicitudin porttitor. Sed non tellus in
              lacus sollicitudin porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              sed sapien
              tempus, convallis. nisi ut, sollicitudin justo. Sed non tellus in lacus sollicitudin porttitor.
              Sed non tellus in
              lacus sollicitudin porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              sed sapien
                        tempus, convallis</p>
            </div>
          </div>
          <div className="div-schemas">
            <div className="div-img-schemas" id="n2">
              <a href="#" aria-label="schemas"><img className="img-schemas" src={imgSchemas} alt="schemas" /></a>
            </div>
            <div className="div-text-schemas">
              <h3 className="title-schemas">Lorem ipsum</h3>
              <p className="text-schemas">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed sapien
              tempus, convallis
              nisi ut, sollicitudin justo. Sed non tellus in lacus sollicitudin porttitor. Sed non tellus in
              lacus sollicitudin porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              sed sapien
              tempus, convallis. nisi ut, sollicitudin justo. Sed non tellus in lacus sollicitudin porttitor.
              Sed non tellus in
              lacus sollicitudin porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              sed sapien
                        tempus, convallis</p>
            </div>
            <div className="div-img-schemas" id="n1">
              <a href="#" aria-label="schemas"><img className="img-schemas" src={imgSchemas} alt="schemas" /></a>
            </div>
          </div>
          <div className="div-schemas" id="last-div-schemas">
            <div className="div-img-schemas">
              <a href="#" aria-label="schemas"><img className="img-schemas" src={imgSchemas} alt="schemas" /></a>
            </div>
            <div className="div-text-schemas">
              <h3 className="title-schemas">Lorem ipsum</h3>
              <p className="text-schemas">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed sapien
              tempus, convallis
              nisi ut, sollicitudin justo. Sed non tellus in lacus sollicitudin porttitor. Sed non tellus in
              lacus sollicitudin porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              sed sapien
              tempus, convallis. nisi ut, sollicitudin justo. Sed non tellus in lacus sollicitudin porttitor.
              Sed non tellus in
              lacus sollicitudin porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              sed sapien
                        tempus, convallis</p>
            </div>
          </div>
          <div className="div-call-action">
            <h3 className="title-call-action" id="analyser">{t('geo-energie.analyser')}</h3>
            <a href="https://app.geosophy.io/auth/login" aria-label="schemas" target="_blank" className="button greenButton" id="essaiButton">{t('geo-energie.essaiButton')}</a>
          </div>
        </section>
      </main>
      <style jsx>{`
        /***************************************** PRESENTATION SECTION *****************************************/

        #presentation-section {
          display: -webkit-box;
          display: flex;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          flex-direction: column;
          -webkit-box-align: center;
          align-items: center;
          -webkit-box-pack: center;
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

        #title-green::after {
            content: "";
            width: 120px;
            height: 1.5px;
            background: #7bd444;
            border-radius: 12px;
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            margin: 0 auto;
            -webkit-transform: translateY(10px);
            transform: translateY(10px);
          }

          /***************************************** CALL TO ACTION SECTION *****************************************/

        .call-action-section {
        display: -webkit-box;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-direction: column;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
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
        transition: all 0.3s ease;
        }

        .blueButton:hover {
        background-color: #2c92c5;
        }

        .greenButton {
        background-color: #7bd444;
        transition: all 0.3s ease;
        }

        .greenButton:hover {
        background-color: #549e25;
        }

        /***************************************** SCHEMAS SECTION ****************************************/

        .schemas-section {
        display: -webkit-box;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        -webkit-box-align: center;
        align-items: center;
        }

        .div-schemas {
        width: 100%;
        height: 100%;
        display: -webkit-box;
        display: flex;
        justify-content: space-around;
        -webkit-box-align: center;
        align-items: center;
        flex-wrap: wrap;
        padding-top: 5%;
        padding-bottom: 5%;
        text-align: center;
        }

        .div-img-schemas {
        width: 40%;
        }

        .img-schemas {
        width: 100%;
        -o-object-fit: cover;
        object-fit: cover;
        }

        .div-text-schemas {
        width: 40%;
        text-align: justify;
        }

        .title-schemas {
        font-size: 2.6rem;
        font-family: bahnschrift;
        font-weight: 300;
        margin-bottom: 5%;
        }

        .text-schemas {
        font-size: 1.3rem;
        color: #4a4a4a;
        font-family: "Roboto", sans-serif;
        font-weight: 300;
        }

        #last-div-schemas {
        margin-bottom: 10%;
        }

        #n2 {
        display: none;
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

            /* Schémas section */
            .div-img-schemas {
              width: 100%;
            }
          
            .img-schemas {
              width: 80%;
            }
          
            .div-text-schemas {
              width: 80%;
              text-align: justify;
              margin-bottom: 10%;
            }
          
            .text-schemas {
              font-size: 1.8rem;
            }
          
            .title-schemas {
              text-align: center;
            }
          
            #n2 {
              display: block;
            }
          
            #n1 {
              display: none;
            }

          }
      `}</style>
    </ React.Fragment>
  )
}

geoenergiePage.Layout = LayoutGeoenergie;

geoenergiePage.propTypes = {
  t: PropTypes.func.isRequired,
}


export default withTranslation('common')(geoenergiePage)