import { Card, Flex, RadioChangeEvent, Space } from "antd";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useQuizListWithSSR } from "./_hooks/useQuizListWithSSR";
import { QuizResultIcon } from "./_components/QuizResultIcon";
import { QuizRadioGroup } from "../_components/QuizRadioGroup";
import { QuizCardBottomButton } from "./_components/QuizCardBottomButton";
import { QuizInfoSection } from "../_components/QuizInfoSection";

const ProcessPage = () => {
  const router = useRouter();
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const resetSelectedAnswer = () => {
    setSelectedAnswer("");
  };

  const {
    quizInfo,
    step,
    isNotNextStep,
    checkAnswerOrMoveToNext,
    updateQuizEndTimeAndProcess,
  } = useQuizListWithSSR();

  useEffect(() => {
    resetSelectedAnswer();
  }, [step]);

  const handleGoQuizResult = () => {
    router.push("/quiz/result");
  };

  const onChange = (e: RadioChangeEvent) => {
    setSelectedAnswer(e.target.value);
  };

  const {
    quizAnswers,
    quizCategory,
    quizDifficulty,
    quizQuestion,
    isQuizAnswered,
    isCorrect,
    correctAnswer,
  } = quizInfo;

  const goResultPageAndUpdateEndTime = () => {
    updateQuizEndTimeAndProcess();
    handleGoQuizResult();
  };

  const handleAnswerOrNextStep = () => {
    checkAnswerOrMoveToNext(selectedAnswer);
  };

  return (
    <QuizProcessContainer>
      <StyledCard title={`Q${step + 1}. ${quizQuestion}`}>
        <Flex justify="space-between" align="center">
          <QuizInfoSection quizCategory={quizCategory} quizDifficulty={quizDifficulty} />
          <QuizResultIcon isCorrect={isCorrect} isQuizAnswered={isQuizAnswered} />
        </Flex>
        <QuizRadioGroup
          isQuizAnswered={isQuizAnswered}
          correctAnswer={correctAnswer}
          quizAnswers={quizAnswers}
          onChange={onChange}
        />
        <QuizCardBottomButton
          isQuizAnswered={isQuizAnswered}
          isNotNextStep={isNotNextStep}
          goResultPageAndUpdateEndTime={goResultPageAndUpdateEndTime}
          handleAnswerOrNextStep={handleAnswerOrNextStep}
        />
      </StyledCard>
    </QuizProcessContainer>
  );
};

export default ProcessPage;

const QuizProcessContainer = styled(Space)`
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
