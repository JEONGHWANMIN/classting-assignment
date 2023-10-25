import { Button, Card, Space } from "antd";
import React from "react";
import styled from "styled-components";
import { QuizRadioGroup } from "../_components/QuizRadioGroup";
import { useQuizResultWithSSR } from "./_hooks/useQuizQuizNotesWithSSR";
import { QuizDescription } from "./_components/QuizDescription";
import { QuizInfoSection } from "../_components/QuizInfoSection";

const NotesPage = () => {
  const {
    notesStep,
    quizInfo,
    isLastStep,
    updateQuizStepDescription,
    goNextStep,
    goPreviousStep,
  } = useQuizResultWithSSR();

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
      <StyledCard title={`Q${notesStep + 1}. ${quizQuestion}`}>
        <Button onClick={goPreviousStep} disabled={notesStep <= 0}>
          이전
        </Button>
        <Button onClick={goNextStep} disabled={isLastStep}>
          다음
        </Button>
        <QuizInfoSection quizCategory={quizCategory} quizDifficulty={quizDifficulty} />
        <QuizRadioGroup
          isQuizAnswered={isQuizAnswered}
          correctAnswer={correctAnswer}
          quizAnswers={quizAnswers}
          userAnswer={userAnswer}
        />
        <QuizDescription
          quizStepDescription={description}
          updateQuizStepDescription={updateQuizStepDescription}
        />
      </StyledCard>
    </QuizNotesContainer>
  );
};

export default NotesPage;

const QuizNotesContainer = styled(Space)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledCard = styled(Card)`
  width: 500px;
  margin-top: 60px;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  min-height: 423px;

  .ant-card-head-title {
    white-space: normal;
  }

  @media (max-width: 430px) {
    width: 90vw;
  }
`;
