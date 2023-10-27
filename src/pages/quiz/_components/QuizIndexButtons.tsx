import { Button, Flex } from "antd";
import React from "react";
import styled from "styled-components";

interface QuizIndexButtonsProps {
  isShowGoNotesButton: boolean;
  handleGoSettingPage: () => void;
  handleGoNotesPage: () => void;
}

const QuizIndexButtons = ({
  isShowGoNotesButton,
  handleGoNotesPage,
  handleGoSettingPage,
}: QuizIndexButtonsProps) => {
  return (
    <ButtonContainer>
      <StyledButton type="primary" onClick={handleGoSettingPage}>
        퀴즈 시작
      </StyledButton>
      {isShowGoNotesButton && (
        <StyledButton onClick={handleGoNotesPage}>오답 노트</StyledButton>
      )}
    </ButtonContainer>
  );
};

export { QuizIndexButtons };

const ButtonContainer = styled(Flex)`
  flex-direction: column;
  gap: 12px;
`;

const StyledButton = styled(Button)`
  width: 100%;
  height: 40px;
`;
