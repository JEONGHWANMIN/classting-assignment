import { Button, Flex } from "antd";
import React from "react";
import styled from "styled-components";

interface QuizStepButtonsProps {
  goPreviousStep: () => void;
  goNextStep: () => void;
  isLastStep: boolean;
  isFirstStep: boolean;
}

const QuizStepButtons = ({
  goNextStep,
  goPreviousStep,
  isFirstStep,
  isLastStep,
}: QuizStepButtonsProps) => {
  return (
    <QuizStepButtonContainer>
      <Button type="default" onClick={goPreviousStep} disabled={isFirstStep}>
        이전
      </Button>
      <Button type="default" onClick={goNextStep} disabled={isLastStep}>
        다음
      </Button>
    </QuizStepButtonContainer>
  );
};

export { QuizStepButtons };

const QuizStepButtonContainer = styled(Flex)`
  margin-top: 16px;
  justify-content: center;
  gap: 10px;
`;
