import React from 'react'
import PropTypes from 'prop-types'
import Navbar from './navbar';
import Footer from './footer';
import Head from 'next/head';
import BandeauEquipe from '../public/Bandeau-equipe-min.jpg';


const LayoutEquipe = ({ children }) => {
  return (
    <React.Fragment>
      <Head>
        {/*<link rel="canonical" href="https://example.com" />*/}
        <title>Equipe</title>
      </Head>
      <header className="equipe">
        <Navbar linkId3="link" />
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
      .equipe {
        background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0.5))), url(${BandeauEquipe});
        background: -o-linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${BandeauEquipe});
        background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${BandeauEquipe});
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
        height: 100vh;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
      }
      `}</style>
    </React.Fragment>
  )
}

export default LayoutEquipe;