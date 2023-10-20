import React from "react";
import styled from "styled-components";
import { Card } from "@src/components/core/Card";
import Dropdown from "@src/components/core/DropDown";

const dummu = [
  { key: 1, value: "사과" },
  { key: 2, value: "배" },
  { key: 3, value: "나무" },
];

const QuizPage = () => {
  return (
    <QuizContainer>
      <CardContainer>
        <Card>
          <CardTitle>asdsa</CardTitle>
        </Card>
        <Dropdown items={dummu} />
      </CardContainer>
    </QuizContainer>
  );
};

export default QuizPage;

const QuizContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardContainer = styled.div`
  margin-top: 30px;
`;

const CardTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.h3};
`;
