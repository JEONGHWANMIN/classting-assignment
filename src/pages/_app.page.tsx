import Head from "next/head";
import type { AppProps } from "next/app";
import { Layout } from "@src/components/layout/Layout";
import { RootProvider } from "@src/provider/RootProvider";
import "../styles/fonts.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>영어 퀴즈 서비스</title>
      </Head>
      <RootProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RootProvider>
    </>
  );
};

export default App;
