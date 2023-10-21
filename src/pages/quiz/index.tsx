import { Button } from "antd";
import React from "react";
import styled from "styled-components";

const QuizPage = () => {
  return (
    <QuizContainer>
      <StyledH1>Hello</StyledH1>
      <Button type="primary" danger>
        버튼 테스트1
      </Button>
    </QuizContainer>
  );
};

export default QuizPage;

const QuizContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledH1 = styled.h1`
  font-size: 24px;
`;
