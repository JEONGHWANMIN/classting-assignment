import { ConfigProvider } from "antd";
import React, { ReactElement } from "react";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "@src/styles/GlobalStyles";
import { antTheme } from "@src/styles/antTheme";
import { styledTheme } from "@src/styles/styledTheme";
import { WithFloating } from "@src/components/hoc/WithFloating";

interface RootProviderProps {
  children: ReactElement;
}

const RootProvider = ({ children }: RootProviderProps) => {
  return (
    <RecoilRoot>
      <ThemeProvider theme={styledTheme}>
        <ConfigProvider theme={antTheme}>
          <GlobalStyles />
          <WithFloating>{children}</WithFloating>
        </ConfigProvider>
      </ThemeProvider>
    </RecoilRoot>
  );
};

export { RootProvider };
