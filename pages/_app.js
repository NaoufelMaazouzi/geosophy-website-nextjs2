import React from 'react';
import App from 'next/app';
import "../styles/styleContact.css";
import { appWithTranslation } from '../i18n';
const Noop = ({ children }) => children

//DEFINE THE LAYOUT OF ALL PAGES
class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props
        const Layout = Component.Layout || Noop
        return (
            <React.Fragment>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
                <style jsx global>{`
			      @font-face {
                    font-family: bahnschrift;
                    src: url('/fonts/BAHNSCHRIFT.TTF');
                    font-weight: light;
                  }
				`}</style>
            </React.Fragment>
        )
    }
}

export default appWithTranslation(MyApp)