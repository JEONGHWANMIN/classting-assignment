import { Button, Card, Space } from "antd";
import React from "react";
import styled from "styled-components";

const ProcessPage = () => {
  return (
    <SpaQuizContainer>
      <StyledCard title="Q. 12312321321123">
        <h1>문제보기1</h1>
        <h1>문제보기2</h1>
        <h1>문제보기3</h1>
        <h1>문제보기4</h1>
      </StyledCard>
    </SpaQuizContainer>
  );
};

export default ProcessPage;

const SpaQuizContainer = styled(Space)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledCard = styled(Card)`
  width: 500px;
  margin-top: 60px;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 390px) {
    width: 90vw;
  }
`;
