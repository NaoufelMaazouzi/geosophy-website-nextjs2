import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './navbar';
import Head from 'next/head';
import BandeauContact from '../public/Bandeau-contact-min.jpg';


const LayoutContact = ({ children }) => {
  return (
    <React.Fragment>
      <Head>
        {/*<link rel="canonical" href="https://example.com" />*/}
        <title>Contact</title>
      </Head>
      <header className="contact">
        <Navbar />
      </header>
      {children}
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
      .contact {
        background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0.5))),
  url(${BandeauContact});
background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${BandeauContact});
background-position: center bottom;
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
    </React.Fragment>
  )
}

export default LayoutContact;