import { Radio } from "antd";
import { RadioButtonProps } from "antd/es/radio/radioButton";
import React from "react";
import styled from "styled-components";
import { styledTheme } from "@src/styles/styledTheme";

interface QuizRadioButtonProps extends RadioButtonProps {
  answer: string;
  correctAnswer: string | number;
  isQuizAnswered: boolean;
}

const QuizRadioButton = ({
  answer,
  correctAnswer,
  isQuizAnswered,
  ...props
}: QuizRadioButtonProps) => {
  const isAnswerCorrect = isQuizAnswered && answer === correctAnswer;
  return (
    <StyledRadioButton
      value={answer}
      disabled={isQuizAnswered}
      isAnswerCorrect={isAnswerCorrect}
      {...props}
    >
      {answer}
    </StyledRadioButton>
  );
};

export { QuizRadioButton };

const StyledRadioButton = styled(Radio.Button)<{
  isAnswerCorrect: boolean;
}>`
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  border-inline-start-width: 1;
  border-radius: 10px;
  background-color: ${({ isAnswerCorrect }) =>
    isAnswerCorrect ? styledTheme.colors.mainGreen[100] : ""} !important;
  border-color: ${({ isAnswerCorrect }) =>
    isAnswerCorrect ? styledTheme.colors.mainGreen[300] : ""} !important;
`;
