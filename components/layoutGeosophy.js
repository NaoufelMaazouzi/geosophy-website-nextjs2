import React from 'react'
import PropTypes from 'prop-types'
import Navbar from './navbar';
import Footer from './footer';
import BandeauGeosophy from '../public/Bandeau-Geosophy-min.jpg';






const LayoutGeosophy = ({ children }) => {
  return (
    <div>
      <header className="geosophy">
        <Navbar />
      </header>
      {children}
      <Footer />
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: "Poppins", sans-serif;
        }
        
        html {
          scroll-behavior: smooth;
        }

        @media (max-width: 420px) {
          * {
            font-size: 8px;
          }
        }

        @media (min-width: 421px) and (max-width: 1365px) {
          * {
            font-size: 13px;
          }
        }

        @media screen and (min-width: 1920) {
          * {
            font-size: 19px;
          }
        }
      `}</style>
      <style jsx>{` 
      .geosophy {
        background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0.5))),
          url(${BandeauGeosophy});
        background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${BandeauGeosophy});
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
        height: 100vh;
        display: -webkit-box;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-direction: column;
      }
      `}</style>
    </div>
  )
}

export default LayoutGeosophy;