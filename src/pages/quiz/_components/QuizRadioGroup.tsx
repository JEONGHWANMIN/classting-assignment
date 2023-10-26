import { Radio, RadioChangeEvent } from "antd";
import React from "react";
import styled from "styled-components";
import { QuizRadioButton } from "./QuizRadioButton";

interface QuizRadioGroupProps {
  quizAnswers: string[];
  isQuizAnswered: boolean;
  correctAnswer: string | number;
  userAnswer?: string;
  onChange?: (e: RadioChangeEvent) => void;
}

const QuizRadioGroup = ({
  correctAnswer,
  isQuizAnswered,
  quizAnswers,
  userAnswer,
  onChange,
}: QuizRadioGroupProps) => {
  return (
    <StyledRadioGroup onChange={onChange} buttonStyle="outline">
      {quizAnswers.map((answer) => (
        <QuizRadioButton
          key={answer}
          answer={answer}
          correctAnswer={correctAnswer}
          isQuizAnswered={isQuizAnswered}
          userAnswer={userAnswer}
        />
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
  min-height: 228px;

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
