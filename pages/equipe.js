import React from 'react';
import PropTypes from 'prop-types';
import { i18n, Link, withTranslation } from '../i18n';

import imgSchemas from '../public/schémas1.jpg';
import imgPerson from '../public/Group1.svg';
import logoArts from '../public/arts-metiers3.png';
import logoFrenchTech from '../public/french-tech.png';
import logoEit from '../public/eit.png';
import logoDynFluid from '../public/DynFluid.png';
import logoBrgm from '../public/brgm.png';
import logoIfpen from '../public/ifpen.png';
import logoSchlumberger from '../public/Schlumberger.png';
import logoHbs from '../public/hbs.png';
import logoLinkedin from '../public/Vector.svg';
import LayoutEquipe from '../components/layoutEquipe';




function equipePage({ t }) {
  return (
    <React.Fragment>
      <main>
        <section id="presentation-section">
          <h2 className="title-section" id="title-blue">{t('equipe.equipeTitle')}</h2>
        </section>

        <section className="schemas-section">
          <div className="div-schemas">
            <div className="div-img-schemas">
              <a href="#" aria-label="schemas"><img className="img-schemas" src={imgSchemas} alt="schemas" /></a>
            </div>
            <div className="div-text-schemas">
              <h3 className="title-schemas" id="titleHistory">{t('equipe.titleHistory')}</h3>
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
              <h3 className="title-schemas" id="titleCulture">{t('equipe.titleCulture')}</h3>
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
              <h3 className="title-schemas" id="titleCommunity">{t('equipe.titleCommunity')}</h3>
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

        </section>

        <section className="person-section">
          <div className="div-person">
            <img className="img-person" src={imgPerson} alt="photo Quentin" />
            <p className="person-name">Quentin Barral</p>
            <p className="person-job" id="cto">{t('equipe.cto')}</p>
            <a href="https://www.linkedin.com/in/quentin-barral/" aria-label="linkedin" target="_blank" className="linkedin"><img
              src={logoLinkedin} alt="linkedin" /></a>
          </div>
          <div className="div-person">
            <img className="img-person" src={imgPerson} alt="photo Alice" />
            <p className="person-name">Alice Chougnet</p>
            <p className="person-job" id="ceo">{t('equipe.ceo')}</p>
            <a href="https://www.linkedin.com/in/alice-chougnet/" aria-label="linkedin" target="_blank" className="linkedin"><img
              src={logoLinkedin} alt="linkedin" /></a>
          </div>
          <div className="div-person">
            <img className="img-person" src={imgPerson} alt="photo Louis" />
            <p className="person-name">Louis Bondaz</p>
            <p className="person-job">Data Scientist</p>
            <a href="https://www.linkedin.com/in/louis-bondaz-bb2835b1/" aria-label="linkedin" target="_blank" className="linkedin"><img
              src={logoLinkedin} alt="linkedin" /></a>
          </div>
          <div className="div-call-action">
            <h3 className="title-call-action" id="question">{t('equipe.question')}</h3>
            <Link href="/contact">
              <a className="button blueButton contactButton" aria-label="contact">Contact</a>
            </Link>
          </div>
        </section>
        <section className="references-section">
          <div className="div-call-action">
            <h2 className="title-call-action" id="soutien">{t('equipe.soutien')}</h2>
          </div>
          <div className="slider">
            <div className="slide">
              <img src={logoArts} alt="logo arts" />
              <img src={logoFrenchTech} alt="logo FrecnhTech" />
              <img src={logoEit} alt="logo Eit" />
              <img src={logoDynFluid} alt="logo DynFluid" />
              <img src={logoBrgm} alt="logo Brgm" />
              <img src={logoIfpen} alt="logo Ifpen" />
              <img src={logoSchlumberger} alt="logo Schlumberger" />
              <img src={logoHbs} alt="logo Hbs" />

            </div>
            <div className="slide">
              <img src={logoArts} alt="logo arts" />
              <img src={logoFrenchTech} alt="logo FrecnhTech" />
              <img src={logoEit} alt="logo Eit" />
              <img src={logoDynFluid} alt="logo DynFluid" />
              <img src={logoBrgm} alt="logo Brgm" />
              <img src={logoIfpen} alt="logo Ifpen" />
              <img src={logoSchlumberger} alt="logo Schlumberger" />
              <img src={logoHbs} alt="logo Hbs" />
            </div>
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
              width: 100%;
            }
            
            .title-section::after {
              content: "";
              width: 120px;
              height: 3px;
              background: black;
              border-radius: 12px;
              position: absolute;
              left: 0;
              right: 0;
              bottom: 0;
              margin: 0 auto;
              -webkit-transform: translateY(10px);
              transform: translateY(10px);
            }
            
            .div-text-subhead {
              width: 70%;
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

            #title-blue::after {
                content: "";
                width: 120px;
                height: 3px;
                background: #57b1dd;
                border-radius: 12px;
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                margin: 0 auto;
                -webkit-transform: translateY(10px);
                transform: translateY(10px);
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

            /***************************************** PERSON SECTION ****************************************/

            .person-section {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            flex-wrap: wrap;
            }

            .div-person {
            width: 30%;
            text-align: center;
            }

            .person-name {
            font-size: 1.8rem;
            }

            .person-job {
            font-size: 1rem;
            position: relative;
            }

            .person-job::after {
            content: "";
            width: 200px;
            height: 1px;
            background: black;
            border-radius: 12px;
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            margin: 0 auto;
            -webkit-transform: translateY(10px);
            transform: translateY(10px);
            }

            .img-person {
            width: 80%;
            -o-object-fit: cover;
            object-fit: cover;
            }

            .linkedin {
            line-height: 80px;
            }

            /***************************************** REFERENECES SECTION *****************************************/
        
            .references-section {
              display: -webkit-box;
              display: flex;
              -webkit-box-orient: horizontal;
              -webkit-box-direction: normal;
              flex-direction: row;
              -webkit-box-align: center;
              align-items: center;
              justify-content: space-around;
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
              display: flex;
              overflow: hidden;
            }
    
            .slide {
              height: 100px;
              display: flex;
              align-items: center;
              animation: slideshow 40s linear infinite;
            }
    
            .slide img {
              height: 70px;
              padding: 0 50px 0 50px;
            }
            
            @keyframes slideshow {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-100%);
              }
            }
    
            .slider::before,
            .slider::after {
              height: 100px;
              width: 200px;
              position: absolute;
              content: "";
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
              transform: rotateZ(180deg);
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
        animation: slideshow 20s linear infinite;
      }

      .slider::before,
      .slider::after {
        width: 100px;
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

            /* Person section */
            .div-person {
                width: 100%;
            }
          }

          @media (min-width: 769px) and (max-width: 1150px) {
            .div-person {
              width: 40%;
            }
          }
      `}</style>
    </React.Fragment>
  )
}

equipePage.Layout = LayoutEquipe;

equipePage.propTypes = {
  t: PropTypes.func.isRequired,
}


export default withTranslation('common')(equipePage)