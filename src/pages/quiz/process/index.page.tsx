import { Card, Flex, RadioChangeEvent, Space } from "antd";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";
import { useQuizListWithSSR } from "./_hooks/useQuizListWithSSR";
import { QuizResultIcon } from "./_components/QuizResultIcon";
import { QuizRadioGroup } from "./_components/QuizRadioGroup";
import { QuizCardBottomButton } from "./_components/QuizCardBottomButton";
import { QuizInfoSection } from "./_components/QuizInfoSection";

const ProcessPage = () => {
  const router = useRouter();
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleGoQuizResult = () => {
    router.push("/quiz/result");
  };

  const onChange = (e: RadioChangeEvent) => {
    setSelectedAnswer(e.target.value);
  };

  const { quizInfo, step, isNotNextStep, checkAnswerOrMoveToNext, updateQuizEndTime } =
    useQuizListWithSSR();

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
    updateQuizEndTime();
    handleGoQuizResult();
  };

  const handleAnswerOrNextStep = () => {
    checkAnswerOrMoveToNext(selectedAnswer);
    setSelectedAnswer("");
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

  .ant-card-head-title {
    white-space: normal;
  }

  @media (max-width: 390px) {
    width: 90vw;
  }
`;
