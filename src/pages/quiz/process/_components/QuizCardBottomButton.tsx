import { Button } from "antd";
import React from "react";
import styled from "styled-components";

interface QuizCardBottomButton {
  isNotNextStep: boolean;
  isQuizAnswered: boolean;
  goResultPageAndUpdateEndTime: () => void;
  handleAnswerOrNextStep: () => void;
}

const QuizCardBottomButton = ({
  isQuizAnswered,
  goResultPageAndUpdateEndTime,
  handleAnswerOrNextStep,
  isNotNextStep,
}: QuizCardBottomButton) => {
  const checkAnswerOrNextStepText = isQuizAnswered ? "다음 문제 풀기" : "정답 확인하기";
  return (
    <>
      {isNotNextStep ? (
        <StartButton type="primary" onClick={goResultPageAndUpdateEndTime}>
          결과 확인하기
        </StartButton>
      ) : (
        <StartButton type="primary" onClick={handleAnswerOrNextStep}>
          {checkAnswerOrNextStepText}
        </StartButton>
      )}
    </>
  );
};

export { QuizCardBottomButton };

const StartButton = styled(Button)`
  margin-top: 20px;
  width: 100%;
  height: 40px;
`;
