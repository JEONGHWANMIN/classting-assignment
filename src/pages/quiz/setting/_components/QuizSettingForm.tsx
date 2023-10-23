import { Flex } from "antd";
import React from "react";
import styled from "styled-components";
import { CoreSelect, handleSelectChangeType } from "@src/components/core/CoreSelect";
import {
  QUIZ_CATEGORY_OPTIONS,
  QUIZ_COUNT_OPTIONS,
  QUIZ_DIFFICULTY_OPTIONS,
  QuizSetting,
} from "../_constant/constant";

interface QuizSettingFormProps {
  quizSetting: QuizSetting;
  handleSelectChange: handleSelectChangeType;
}

const QuizSettingForm = ({ quizSetting, handleSelectChange }: QuizSettingFormProps) => {
  return (
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
    </SelectContainer>
  );
};

export { QuizSettingForm };

const SelectContainer = styled(Flex)`
  flex-direction: column;
  gap: 15px;
  width: 100%;
`;
