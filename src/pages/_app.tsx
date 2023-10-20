import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";
import GlobalStyles from "@src/styles/GlobalStyles";
import { theme } from "@src/styles/theme";
import { Layout } from "@src/components/layout/Layout";
import "../styles/fonts.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </RecoilRoot>
  );
}
