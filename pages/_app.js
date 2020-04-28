import React from 'react';
import App from 'next/app';
import { appWithTranslation } from '../i18n';
const Noop = ({ children }) => children


class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props
        const Layout = Component.Layout || Noop
        return (
            <React.Fragment>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </React.Fragment>
        )
    }
}

export default appWithTranslation(MyApp)