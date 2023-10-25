import { Radio } from "antd";
import { RadioButtonProps } from "antd/es/radio/radioButton";
import React from "react";
import styled from "styled-components";
import { styledTheme } from "@src/styles/styledTheme";

interface QuizRadioButtonProps extends RadioButtonProps {
  answer: string;
  correctAnswer: string | number;
  isQuizAnswered: boolean;
  userAnswer?: string;
}

const QuizRadioButton = ({
  answer,
  correctAnswer,
  isQuizAnswered,
  userAnswer,
  ...props
}: QuizRadioButtonProps) => {
  const isAnswerCorrect = isQuizAnswered && answer === correctAnswer;
  const isUserAnswer = isQuizAnswered && answer === userAnswer;
  return (
    <StyledRadioButton
      value={answer}
      disabled={isQuizAnswered}
      isAnswerCorrect={isAnswerCorrect}
      isUserAnswer={isUserAnswer}
      {...props}
    >
      {answer}
    </StyledRadioButton>
  );
};

export { QuizRadioButton };

const StyledRadioButton = styled(Radio.Button)<{
  isAnswerCorrect: boolean;
  isUserAnswer: boolean;
}>`
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  border-inline-start-width: 1;
  border-radius: 10px;

  background-color: ${({ isAnswerCorrect, isUserAnswer }) =>
    isAnswerCorrect
      ? styledTheme.colors.mainGreen[100]
      : isUserAnswer
      ? styledTheme.colors.warning[300]
      : ""} !important;

  border-color: ${({ isAnswerCorrect, isUserAnswer }) =>
    isAnswerCorrect
      ? styledTheme.colors.mainGreen[300]
      : isUserAnswer
      ? styledTheme.colors.warning[400]
      : ""} !important;
`;
