import React from "react";
import styled from "styled-components";

interface CardProps {
  children: React.ReactElement;
}

const Card = ({ children }: CardProps) => {
  return <CardContainer>{children}</CardContainer>;
};

export { Card };

const CardContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  height: 350px;
  width: 90vw;
  max-width: 500px;
  padding: 18px;
`;
