import { Button, Card, Divider, Space } from "antd";
import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useQuizResultWithSSR } from "./_hooks/useQuizResultWithSSR";
import { QuizResultInfo } from "./_components/QuizResultInfo";
import { QuizDoughnutChart } from "./_components/QuizDoughnutChart";

const ResultPage = () => {
  const router = useRouter();

  const handleGoQuizPage = () => {
    router.push("/quiz");
  };

  const handleGoNotesPage = () => {
    router.push("/quiz/notes");
  };

  const { correctAnswersRatio, inCorrectAnswersRatio, resultTexts } =
    useQuizResultWithSSR();

  const { correctResultText, inCorrectResultText, elapsedTimeText } = resultTexts;

  return (
    <QuizResultContainer>
      <StyledCard title="퀴즈 결과">
        <QuizDoughnutChart
          correctAnswersRatio={correctAnswersRatio}
          inCorrectAnswersRatio={inCorrectAnswersRatio}
        />
        <Divider plain>결과</Divider>
        <QuizResultInfo
          correctResultText={correctResultText}
          elapsedTimeText={elapsedTimeText}
          inCorrectResultText={inCorrectResultText}
        />
        <NoteButton type="primary" onClick={handleGoQuizPage}>
          홈으로
        </NoteButton>
        <NoteButton onClick={handleGoNotesPage}>오답 노트</NoteButton>
      </StyledCard>
    </QuizResultContainer>
  );
};

export default ResultPage;

const QuizResultContainer = styled(Space)`
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

const NoteButton = styled(Button)`
  width: 100%;
  height: 40px;
  margin-top: 10px;
`;
