import "jest-styled-components";
import { ThemeProvider } from "styled-components";
import { render as rtlRender, RenderOptions } from "@testing-library/react";
import { ConfigProvider } from "antd";
import { ReactElement } from "react";
import { styledTheme } from "@src/styles/styledTheme";
import { antTheme } from "@src/styles/antTheme";
import GlobalStyles from "@src/styles/GlobalStyles";

interface WrapperProps {
  children: ReactElement;
}

const Wrapper = ({ children }: WrapperProps) => (
  <>
    <ThemeProvider theme={styledTheme}>
      <ConfigProvider theme={antTheme}>
        <GlobalStyles />
        {children}
      </ConfigProvider>
    </ThemeProvider>
  </>
);

const renderWithStyledComponent = (
  ui: React.ReactElement,
  options?: RenderOptions
) => rtlRender(ui, { wrapper: Wrapper, ...options });

export * from "@testing-library/react";

export { renderWithStyledComponent as render };
