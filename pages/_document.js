import Document, { Html, Head, Main, NextScript } from 'next/document'

//DEFINE THE HEAD & BODY OF ALL THE PAGES
class MyDocument extends Document {
    render() {
        return (
            <Html lang="fr">
                <Head>
                    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="description" content="L'énergie propre à portée de main. Juste sous nos pieds. Révélez toute la valeur de votre foncier. Valorisation immobilière du capital géo-énergétique."></meta>
                    <link href="https://fonts.googleapis.com/css2?family=Nunito&family=Poppins&family=Red+Hat+Display&display=swap"
                        rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap" rel="stylesheet" />
                    <link rel="preload" href="/fonts/BAHNSCHRIFT.TTF" as="font" crossOrigin="" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>
                </body>
            </Html>
        )
    }
}

export default MyDocument