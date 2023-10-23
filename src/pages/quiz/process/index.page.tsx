import { Button, Card, Flex, Radio, RadioChangeEvent, Space, Tag } from "antd";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";
import { CheckCircleTwoTone, CloseCircleTwoTone } from "@ant-design/icons";
import { styledTheme } from "@src/styles/styledTheme";
import { useQuizListWithSSR } from "./_hooks/useQuizListWithSSR";
import { QUIZ_DIFFICULTY_TAG_COLORS } from "./_constant/constant";

const ProcessPage = () => {
  const router = useRouter();
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const { quizInfo, step, handleGoNextStep, confirmAnswerSubmission, lastStep } =
    useQuizListWithSSR();

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
  } = quizInfo;

  const isNotNextStep = isQuizAnswered && lastStep;
  const buttonText = isQuizAnswered ? "다음 문제 풀기" : "정답 확인하기";

  const handleButtonEvent = () => {
    if (isQuizAnswered) {
      handleGoNextStep();
      return;
    }
    confirmAnswerSubmission(selectedAnswer);
  };

  return (
    <SpaQuizContainer>
      <StyledCard title={`Q${step + 1}. ${quizQuestion}`}>
        <Flex justify="space-between" align="center">
          <StyledInfoTags>
            <Tag color={QUIZ_DIFFICULTY_TAG_COLORS[quizDifficulty]}>{quizDifficulty}</Tag>
            <Tag color="processing">{quizCategory}</Tag>
          </StyledInfoTags>
          {isQuizAnswered && (
            <p style={{ whiteSpace: "nowrap" }}>
              {isCorrect ? (
                <StyledCheckIcon twoToneColor={styledTheme.colors.mainGreen[200]} />
              ) : (
                <CloseCircleTwoTone
                  style={{
                    fontSize: "18px",
                  }}
                  twoToneColor={styledTheme.colors.error[500]}
                />
              )}
            </p>
          )}
        </Flex>
        <StyledRadioGroup onChange={onChange} buttonStyle="outline">
          {quizAnswers.map((answer) => (
            <StyledRadioButton key={answer} value={answer} disabled={isQuizAnswered}>
              {answer}
            </StyledRadioButton>
          ))}
        </StyledRadioGroup>
        {isNotNextStep ? (
          <StartButton type="primary" onClick={() => router.push("/quiz/result")}>
            결과 확인하기
          </StartButton>
        ) : (
          <StartButton type="primary" onClick={handleButtonEvent}>
            {buttonText}
          </StartButton>
        )}
      </StyledCard>
    </SpaQuizContainer>
  );
};

export default ProcessPage;

const SpaQuizContainer = styled(Space)`
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

const StyledInfoTags = styled(Space)`
  width: 100%;
  margin-bottom: 10px;
`;

const StyledRadioGroup = styled(Radio.Group)`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;

  .ant-radio-button-wrapper {
    border-inline-start-width: 1px;
  }

  .ant-radio-button-wrapper:first-child {
    border-start-start-radius: 10px;
    border-end-start-radius: 10px;
  }

  .ant-radio-button-wrapper:last-child {
    border-start-end-radius: 10px;
    border-end-end-radius: 10px;
  }

  .ant-radio-button-wrapper::before {
    display: none;
  }
`;

const StyledRadioButton = styled(Radio.Button)`
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  border-inline-start-width: 1;
  border-radius: 10px;
`;

const StartButton = styled(Button)`
  margin-top: 20px;
  width: 100%;
  height: 40px;
`;

const StyledCheckIcon = styled(CheckCircleTwoTone)`
  color: ${({ theme }) => theme.colors.mainGreen[200]};
  font-size: 20px;
`;
