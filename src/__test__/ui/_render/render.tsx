import { render as rtlRender, RenderOptions } from "@testing-library/react";
import "jest-styled-components";
import { ReactElement } from "react";
import { RootProvider } from "@src/provider/RootProvider";

interface WrapperProps {
  children: ReactElement;
}

const Wrapper = ({ children }: WrapperProps) => <RootProvider>{children}</RootProvider>;

const renderWithStyledComponent = (ui: React.ReactElement, options?: RenderOptions) =>
  rtlRender(ui, { wrapper: Wrapper, ...options });

export * from "@testing-library/react";

export { renderWithStyledComponent as render };
