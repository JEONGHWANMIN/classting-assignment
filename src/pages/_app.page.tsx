import { RecoilRoot } from "recoil";
import { ConfigProvider } from "antd";
import { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";
import GlobalStyles from "@src/styles/GlobalStyles";
import { Layout } from "@src/components/layout/Layout";
import { styledTheme } from "@src/styles/styledTheme";
import { antTheme } from "@src/styles/antTheme";
import { WithFloating } from "@src/components/hoc/WithFloating";
import "../styles/fonts.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider theme={styledTheme}>
        <ConfigProvider theme={antTheme}>
          <GlobalStyles />
          <WithFloating>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </WithFloating>
        </ConfigProvider>
      </ThemeProvider>
    </RecoilRoot>
  );
}
