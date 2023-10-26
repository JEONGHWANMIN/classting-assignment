import { Space, Tag, Tooltip } from "antd";
import React from "react";
import styled from "styled-components";
import { QUIZ_DIFFICULTY } from "@src/api/quiz/type";
import { QUIZ_DIFFICULTY_TAG_COLORS } from "../process/_constant/constant";

interface QuizInfoSectionProps {
  quizDifficulty: QUIZ_DIFFICULTY;
  quizCategory: string;
}

const QuizInfoSection = ({ quizDifficulty, quizCategory }: QuizInfoSectionProps) => (
  <StyledInfoTags>
    <Tooltip placement="top" title="difficulty">
      <Tag color={QUIZ_DIFFICULTY_TAG_COLORS[quizDifficulty]}>{quizDifficulty}</Tag>
    </Tooltip>
    <Tooltip placement="top" title="category">
      <Tag color="processing">{quizCategory}</Tag>
    </Tooltip>
  </StyledInfoTags>
);

export { QuizInfoSection };

const StyledInfoTags = styled(Space)`
  display: flex;
  gap: 0px;
  width: 100%;
  margin-bottom: 10px;
`;
