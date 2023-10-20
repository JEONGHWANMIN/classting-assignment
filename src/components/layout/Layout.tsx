import React from "react";
import styled from "styled-components";
import { Header } from "./Header";

interface LayoutProps {
  children: React.ReactElement;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutContaier>
      <Header />
      {children}
    </LayoutContaier>
  );
};

export { Layout };

const LayoutContaier = styled.div`
  margin: auto;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.mainGreen[100]};
`;
