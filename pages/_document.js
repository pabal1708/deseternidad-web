// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Definir el título de la página */}
          <title>Desternidad Web Page</title>

          {/* Definir el favicon */}
          <link rel="icon" href="/favicon.ico" />
          {/* Otros elementos <head> personalizados */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
