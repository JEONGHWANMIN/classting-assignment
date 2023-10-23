import { Button, Card, Flex, Space } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import { CoreSelect, handleSelectChangeType } from "@src/components/core/CoreSelect";
import { useSaveQuizListToGlobalState } from "./_query/useSaveQuizListToGlobalState";
import {
  INITIAL_QUIZ_SETTING,
  QUIZ_CATEGORY_OPTIONS,
  QUIZ_COUNT_OPTIONS,
  QUIZ_DIFFICULTY_OPTIONS,
} from "./_constant/constant";

const SettingPage = () => {
  const [quizSetting, setQuizSetting] = useState(INITIAL_QUIZ_SETTING);

  const handleSelectChange: handleSelectChangeType = (name, value) => {
    setQuizSetting((prevQuizSetting) => ({
      ...prevQuizSetting,
      [name]: value,
    }));
  };

  const { isLoadingQuizList, saveQuizList } = useSaveQuizListToGlobalState();

  const handleLoadQuiz = () => {
    saveQuizList(quizSetting);
  };

  return (
    <QuizSettingContainer>
      <StyledCard title="영어 퀴즈 세팅">
        <SelectContainer>
          <CoreSelect
            name="amount"
            handleSelectChange={handleSelectChange}
            selectLabel="퀴즈 수 선택"
            defaultValue={quizSetting.amount}
            selectItems={QUIZ_COUNT_OPTIONS}
          />
          <CoreSelect
            name="difficulty"
            handleSelectChange={handleSelectChange}
            selectLabel="난이도 선택"
            defaultValue={quizSetting.difficulty}
            selectItems={QUIZ_DIFFICULTY_OPTIONS}
          />
          <CoreSelect
            name="category"
            handleSelectChange={handleSelectChange}
            selectLabel="카테고리 선택"
            defaultValue={quizSetting.category}
            selectItems={QUIZ_CATEGORY_OPTIONS}
          />
          <StartButton
            type="primary"
            onClick={handleLoadQuiz}
            loading={isLoadingQuizList}
          >
            퀴즈 풀기
          </StartButton>
        </SelectContainer>
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

  @media (max-width: 390px) {
    width: 90vw;
  }
`;

const SelectContainer = styled(Flex)`
  flex-direction: column;
  gap: 15px;
  width: 100%;
`;

const StartButton = styled(Button)`
  width: 100%;
  height: 40px;
  margin-top: 20px;
`;
