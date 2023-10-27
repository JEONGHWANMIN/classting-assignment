import React from "react";
import { createCache, extractStyle, StyleProvider } from "@ant-design/cssinjs";
import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import type { DocumentContext } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const cache = createCache();
    const originalRenderPage = ctx.renderPage;
    const sheet = new ServerStyleSheet();

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) =>
          (
            <StyleProvider cache={cache}>
              {sheet.collectStyles(<App {...props} />)}
            </StyleProvider>
          ),
      });

    const initialProps = await Document.getInitialProps(ctx);
    const style = extractStyle(cache, true);

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style dangerouslySetInnerHTML={{ __html: style }} />
          {sheet.getStyleElement()}
        </>
      ),
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <title>영어 퀴즈 서비스</title>
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
