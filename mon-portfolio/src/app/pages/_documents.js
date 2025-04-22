import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="fr">
            <Head>
        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
            integrity="sha512-papC1f5f4gMCSf4tZMgZJPvKiyKx0p/2FObfDWrIb8gQAFYdJ0eZC8slqWJg3ZKz1Kw7EjT0NBg9bq+n6L5zKg=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
        />
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
