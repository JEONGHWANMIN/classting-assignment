import { Button, Card, Divider, Space } from "antd";
import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { styledTheme } from "@src/styles/styledTheme";
import { CoreDoughnutChart } from "@src/components/core/CoreDoughnutChart";
import { useQuizResultWithSSR } from "./_hooks/useQuizResultWithSSR";
import { QuizAnswersResultItem } from "./_components/QuizAnswersResultItem";

const ResultPage = () => {
  const router = useRouter();

  const handleGoNotesPage = () => {
    router.push("/quiz/notes");
  };

  const { correctAnswersRatio, inCorrectAnswersRatio, resultTexts } =
    useQuizResultWithSSR();

  const { correctResultText, inCorrectResultText, elapsedTimeText } = resultTexts;

  const data = {
    labels: ["정답", "오답"],
    datasets: [
      {
        data: [correctAnswersRatio, inCorrectAnswersRatio],
        backgroundColor: [
          styledTheme.colors.mainGreen[100],
          styledTheme.colors.error[300],
        ],
      },
    ],
  };

  return (
    <QuizResultContainer>
      <StyledCard title="퀴즈 결과">
        <CoreDoughnutChart data={data} />
        <Divider plain>결과</Divider>
        <QuizAnswersResultItem type="correct" label="정답" content={correctResultText} />
        <QuizAnswersResultItem
          type="incorrect"
          label="오답"
          content={inCorrectResultText}
        />
        <QuizAnswersResultItem label="걸린시간" content={elapsedTimeText} />
        <NoteButton type="primary" onClick={handleGoNotesPage}>
          오답 노트
        </NoteButton>
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
