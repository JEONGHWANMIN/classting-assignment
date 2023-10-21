import { Button } from "antd";
import React from "react";
import styled from "styled-components";

const QuizPage = () => {
  return (
    <QuizContainer>
      <Button type="primary" danger>
        버튼 테스트
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
