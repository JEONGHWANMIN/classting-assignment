import { Card, Space } from "antd";
import React from "react";
import styled from "styled-components";
import { QuizRadioGroup } from "../_components/QuizRadioGroup";
import { useQuizNotes } from "./_hooks/useQuizNotes";
import { QuizDescription } from "./_components/QuizDescription";
import { QuizInfoSection } from "../_components/QuizInfoSection";
import { QuizStepButtons } from "./_components/QuizStepButtons";
import { QuizColorInfo } from "./_components/QuizColorInfo";

const NotesPage = () => {
  const {
    quizInfo,
    isLastStep,
    isFirstStep,
    updateQuizDescriptionInGlobalList,
    goNextStep,
    goPreviousStep,
  } = useQuizNotes();

  const {
    correctAnswer,
    description,
    isQuizAnswered,
    quizAnswers,
    quizCategory,
    quizDifficulty,
    quizQuestion,
    userAnswer,
  } = quizInfo;

  return (
    <QuizNotesContainer>
      <StyledCard title={`Q. ${quizQuestion}`}>
        <QuizInfoSection quizCategory={quizCategory} quizDifficulty={quizDifficulty} />
        <QuizRadioGroup
          isQuizAnswered={isQuizAnswered}
          correctAnswer={correctAnswer}
          quizAnswers={quizAnswers}
          userAnswer={userAnswer}
        />
        <QuizColorInfo />
        <QuizStepButtons
          goNextStep={goNextStep}
          goPreviousStep={goPreviousStep}
          isFirstStep={isFirstStep}
          isLastStep={isLastStep}
        />
        <QuizDescription
          quizStepDescription={description}
          updateQuizStepDescription={updateQuizDescriptionInGlobalList}
        />
      </StyledCard>
    </QuizNotesContainer>
  );
};

export default NotesPage;

export const QuizNotesContainer = styled(Space)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledCard = styled(Card)`
  width: 500px;
  margin-top: 60px;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  .ant-card-head-title {
    white-space: normal;
  }

  @media (max-width: 430px) {
    width: 90vw;
  }
`;
