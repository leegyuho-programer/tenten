import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet(); // 1)
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />), //2)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()], // 2)
      };
    } finally {
      sheet.seal();
    }
  }

  return() {
    return (
      <Html lang="ko">
        <Head></Head>
        <body>
          <Main />
          <NextScript />
          <div id='modal'></div>
        </body>
      </Html>
    );
  }
}
