import { Button, Card, Space } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import { handleSelectChangeType } from "@src/components/core/CoreSelect";
import { useSaveQuizToGlobalState } from "./_query/useSaveQuizToGlobalState";
import { INITIAL_QUIZ_SETTING } from "./_constant/constant";
import { QuizSettingForm } from "./_components/QuizSettingForm";

const SettingPage = () => {
  const [quizSetting, setQuizSetting] = useState(INITIAL_QUIZ_SETTING);

  const { isLoadingQuizList, saveQuizAndGoProcessPage } = useSaveQuizToGlobalState();

  const handleSelectChange: handleSelectChangeType = (name, value) => {
    setQuizSetting((prevQuizSetting) => ({
      ...prevQuizSetting,
      [name]: value,
    }));
  };

  const handleLoadQuiz = () => {
    saveQuizAndGoProcessPage(quizSetting);
  };

  return (
    <QuizSettingContainer>
      <StyledCard title="영어 퀴즈 세팅">
        <QuizSettingForm
          quizSetting={quizSetting}
          handleSelectChange={handleSelectChange}
        />
        <StartButton type="primary" onClick={handleLoadQuiz} loading={isLoadingQuizList}>
          퀴즈 풀기
        </StartButton>
      </StyledCard>
    </QuizSettingContainer>
  );
};

export default SettingPage;

const QuizSettingContainer = styled(Space)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px;
  width: 100vw;
`;

const StyledCard = styled(Card)`
  width: 500px;
  margin-top: 60px;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 430px) {
    width: 90vw;
  }
`;

const StartButton = styled(Button)`
  width: 100%;
  height: 40px;
  margin-top: 20px;
`;
