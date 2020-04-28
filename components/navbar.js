import Link from 'next/link';
import LogoBlanc from '../public/Logo-blanc.png';
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withTranslation } from '../i18n';


function Navbar({ t, linkId1, linkId2, linkId3 }) {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <nav>
        <div className={open ? "hamburger active icon" : "hamburger icon"} onClick={() => setOpen(!open)}>
          <div className="line"></div>
        </div>
        <div className="div-logo-navbar">
          <Link href="/">
            <a aria-label="accueil"><img src={LogoBlanc} className="img-logo" alt="accueil" /></a>
          </Link>
        </div>
        <ul className={open ? "nav-links open" : "nav-links"}>
          <Link href="/">
            <li className={open ? "fade" : ""}><a id={linkId1} aria-label="geosophy">Geosophy</a></li>
          </Link>
          <Link href="/geo-energie">
            <li className={open ? "fade" : ""}><a id={linkId2} className="geo-energie-link" aria-label="geoenergie">{t('navbar.geoenergie')}</a></li>
          </Link>
          <Link href="/equipe">
            <li className={open ? "fade" : ""}><a id={linkId3} className="equipe-link" aria-label="equipe">{t('navbar.equipe')}</a></li>
          </Link>
          <li className={open ? "fade" : ""}><a href="https://app.geosophy.io/auth/login" className="connexion-link" aria-label="connexion">{t('navbar.connexion')}</a></li>
        </ul>
      </nav>
      <div className="div-slogan">
        <h2 className="slogan">{t('header.slogan')}<br />{t('header.slogan2')}</h2>
        <h4 className="slogan-subhead">{t('header.sloganSubhead')}</h4>
        <a href="#presentation-section" aria-label="scroll"><span className="scroll-down"></span></a>
      </div>
      <style jsx>{`
        .scroll-down {
            position: absolute;
            top: 93%;
            left: 50%;
            width: 24px;
            height: 24px;
            margin-left: -12px;
            border-left: 1px solid #fff;
            border-bottom: 1px solid #fff;
            -webkit-transform: rotate(-45deg);
            transform: rotate(-45deg);
            box-sizing: border-box;
        }
        .div-slogan {
            height: 85vh;
            display: -webkit-box;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            flex-direction: column;
            -webkit-box-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            align-items: center;
            text-align: center;
        }
        
        .slogan {
            font-size: 4rem;
            color: white;
            font-family: bahnschrift;
            font-weight: 700;
        }
        
        .slogan-subhead {
            color: white;
            margin-top: 2%;
            font-size: 1.3rem;
            font-family: "Nunito", sans-serif;
            font-weight: 100;
        }
        
        #title-green::after {
            content: "";
            width: 120px;
            height: 3px;
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
          nav {
            height: 15vh;
            display: -webkit-box;
            display: flex;
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            flex-direction: row;
          }
          
          .hamburger {
            position: absolute;
            cursor: pointer;
            right: 5%;
            top: 50%;
            -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            width: 40px;
            height: 40px;
            z-index: 2;
          }
          
          .nav-links {
            display: -webkit-box;
            display: flex;
            list-style: none;
            width: 60%;
            height: 100%;
            justify-content: space-around;
            -webkit-box-align: center;
            align-items: center;
            margin-left: auto;
          }
          
          .nav-links li a {
            color: white;
            text-decoration: none;
            font-family: bahnschrift;
            font-size: 1.7rem;
            font-weight: 400;
            color: white;
            position: relative;
            -webkit-transition: all 0.5s ease;
            transition: all 0.5s ease;
            cursor: pointer;
          }
          
          #link::after {
            content: "";
            width: 60px;
            height: 1.5px;
            background: white;
            border-radius: 12px;
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            margin: 0 auto;
            -webkit-transform: translateY(10px);
            transform: translateY(10px);
          }
          
          .nav-links li a:hover {
            color: #d3d3d3;
          }
          
          .div-logo-navbar img {
            height: 120%;
          }
          
          .img-logo {
            width: 20%;
            -o-object-fit: cover;
            object-fit: cover;
          }
          
        @media (min-width: 421px) and (max-width: 1365px) {
            * {
              font-size: 13px;
            }
          
            /* Header */
            .nav-links li a {
              font-size: 1.7rem;
            }
          
            .div-logo-navbar img {
              height: 100%;
            }
            .div-slogan {
                margin: 5% 5%;
              }
          }
          @media (max-width: 420px) {
            * {
              font-size: 8px;
            }
          
            .div-logo-navbar img {
              height: 70%;
            }
            .div-slogan {
                margin: 5% 5%;
              }
        }
          @media (max-width: 768px) {
            /* Header */
            nav {
              position: relative;
            }
            .line {
              width: 30px;
              height: 3px;
              background: white;
              margin: 5px;
              top: 35%;
              left: 35%;
              -webkit-transform: translate(-50%, -50%);
              transform: translate(-50%, -50%);
              border-radius: 12px;
              position: absolute;
              -webkit-transition: all cubic-bezier(0.26, 0.1, 0.27, 1.55) 0.35s;
              transition: all cubic-bezier(0.26, 0.1, 0.27, 1.55) 0.35s;
            }
          
            .line::before,
            .line::after {
              content: "";
              width: 30px;
              height: 3px;
              background: white;
              border-radius: 12px;
              position: absolute;
              -webkit-transition: all cubic-bezier(0.26, 0.1, 0.27, 1.55) 0.35s;
              transition: all cubic-bezier(0.26, 0.1, 0.27, 1.55) 0.35s;
            }
          
            .line::before {
              top: -10px;
            }
          
            .line::after {
              top: 10px;
            }
          
            .hamburger.active.icon .line {
              background: rgba(0, 0, 0, 0);
            }
          
            .hamburger.active.icon .line::before {
              top: 0;
              -webkit-transform: rotate(45deg);
              transform: rotate(45deg);
            }
          
            .hamburger.active.icon .line::after {
              top: 0;
              -webkit-transform: rotate(-45deg);
              transform: rotate(-45deg);
            }
          
            nav {
              position: relative;
            }
          
            .hamburger {
              position: absolute;
              cursor: pointer;
              right: 5%;
              top: 50%;
              -webkit-transform: translate(-5%, -50%);
              transform: translate(-5%, -50%);
              z-index: 3;
            }
          
            .nav-links {
              position: fixed;
              background-color: #1d222b;
              height: 100vh;
              width: 100%;
              -webkit-box-orient: vertical;
              -webkit-box-direction: normal;
              flex-direction: column;
              clip-path: circle(100px at 120% -15%);
              -webkit-clip-path: circle(100px at 120% -15%);
              -webkit-transition: all 1s ease-out;
              transition: all 1s ease-out;
              pointer-events: none;
              z-index: 1;
            }
          
            .nav-links.open {
              clip-path: circle(1580px at 120% -10%);
              -webkit-clip-path: circle(1580px at 120% -10%);
              pointer-events: all;
              z-index: 2;
            }
            .nav-links li.fade {
              opacity: 1;
            }
          
            .nav-links li {
              opacity: 0;
            }
          
            .nav-links li a {
              font-size: 25px;
            }
          
            .nav-links li:nth-child(1) {
              -webkit-transition: all 0.5s ease 0.2s;
              transition: all 0.5s ease 0.2s;
            }
          
            .nav-links li:nth-child(2) {
              -webkit-transition: all 0.5s ease 0.4s;
              transition: all 0.5s ease 0.4s;
            }
          
            .nav-links li:nth-child(3) {
              -webkit-transition: all 0.5s ease 0.6s;
              transition: all 0.5s ease 0.6s;
            }
          
            .nav-links li:nth-child(4) {
              -webkit-transition: all 0.5s ease 0.8s;
              transition: all 0.5s ease 0.8s;
            }
          
            
        }
      `}</style>
    </React.Fragment>
  )
}

Navbar.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Navbar);