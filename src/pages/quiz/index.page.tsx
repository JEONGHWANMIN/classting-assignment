import { Button, Card, Space } from "antd";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

const QuizPage = () => {
  const router = useRouter();

  const handleGoSettingPage = () => {
    router.push("/quiz/setting");
  };

  return (
    <SpaQuizContainer>
      <StyledCard title="영어 퀴즈 풀기">
        <WelcomeMessage>
          환영합니다! 😊 영어 퀴즈를 시작해보세요.
        </WelcomeMessage>
        <StartButton type="primary" onClick={handleGoSettingPage}>
          퀴즈 시작
        </StartButton>
      </StyledCard>
    </SpaQuizContainer>
  );
};

export default QuizPage;

const SpaQuizContainer = styled(Space)`
  display: flex;
  justify-content: center;
  align-items: center;
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

const WelcomeMessage = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.body5};
  color: ${({ theme }) => theme.colors.gray[800]};
  margin-bottom: 16px;
`;

const StartButton = styled(Button)`
  width: 100%;
  height: 40px;
`;
