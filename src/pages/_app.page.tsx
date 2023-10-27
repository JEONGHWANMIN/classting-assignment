import type { AppProps } from "next/app";
import { Layout } from "@src/components/layout/Layout";
import { RootProvider } from "@src/provider/RootProvider";
import "../styles/fonts.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <RootProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RootProvider>
  );
};

export default App;
