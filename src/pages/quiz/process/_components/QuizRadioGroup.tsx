import { styledTheme } from "@src/styles/styledTheme";
import { Radio, RadioChangeEvent } from "antd";
import React from "react";
import styled from "styled-components";

interface QuizRadioGroupProps {
  onChange: (e: RadioChangeEvent) => void;
  quizAnswers: string[];
  isQuizAnswered: boolean;
  correctAnswer: string | number;
}

const QuizRadioGroup = ({
  correctAnswer,
  isQuizAnswered,
  onChange,
  quizAnswers,
}: QuizRadioGroupProps) => {
  return (
    <StyledRadioGroup onChange={onChange} buttonStyle="outline">
      {quizAnswers.map((answer) => (
        <StyledRadioButton
          key={answer}
          value={answer}
          disabled={isQuizAnswered}
          style={{
            backgroundColor:
              isQuizAnswered && answer === correctAnswer
                ? styledTheme.colors.mainGreen[100]
                : "",
            borderColor:
              isQuizAnswered && answer === correctAnswer
                ? styledTheme.colors.mainGreen[300]
                : "",
          }}
        >
          {answer}
        </StyledRadioButton>
      ))}
    </StyledRadioGroup>
  );
};

export { QuizRadioGroup };

const StyledRadioGroup = styled(Radio.Group)`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;

  .ant-radio-button-wrapper {
    border-inline-start-width: 1px;
  }

  .ant-radio-button-wrapper:first-child {
    border-start-start-radius: 10px;
    border-end-start-radius: 10px;
  }

  .ant-radio-button-wrapper:last-child {
    border-start-end-radius: 10px;
    border-end-end-radius: 10px;
  }

  .ant-radio-button-wrapper::before {
    display: none;
  }
`;

const StyledRadioButton = styled(Radio.Button)`
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  border-inline-start-width: 1;
  border-radius: 10px;
`;
