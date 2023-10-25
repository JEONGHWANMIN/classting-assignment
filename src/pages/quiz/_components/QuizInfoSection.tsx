import { Space, Tag } from "antd";
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
    <Tag color={QUIZ_DIFFICULTY_TAG_COLORS[quizDifficulty]}>{quizDifficulty}</Tag>
    <Tag color="processing">{quizCategory}</Tag>
  </StyledInfoTags>
);

export { QuizInfoSection };

const StyledInfoTags = styled(Space)`
  width: 100%;
  margin-bottom: 10px;
`;
