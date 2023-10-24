import { Button, Card, Space } from "antd";
import React from "react";
import styled from "styled-components";
import { styledTheme } from "@src/styles/styledTheme";
import { CoreDoughnutChart } from "@src/components/core/CoreDoughnutChart";
import { useQuizResultWithSSR } from "./_hooks/useQuizResultWithSSR";

const ResultPage = () => {
  const {
    correctAnswersCount,
    correctAnswersRatio,
    inCorrectAnswersCount,
    inCorrectAnswersRatio,
    timeDifference,
  } = useQuizResultWithSSR();

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
    <QuizSettingContainer>
      <StyledCard title="퀴즈 결과">
        <h1>{`정답 수 : ${correctAnswersCount}`}</h1>
        <h1>{`오답 수 : ${inCorrectAnswersCount}`}</h1>
        <h1>{`걸린시간 : ${timeDifference.hours}시간 ${timeDifference.minutes}분 ${timeDifference.seconds}초`}</h1>
        <CoreDoughnutChart data={data} options={{}} />
      </StyledCard>
    </QuizSettingContainer>
  );
};

export default ResultPage;

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

const StartButton = styled(Button)`
  width: 100%;
  height: 40px;
  margin-top: 20px;
`;
