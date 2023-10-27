import { Button, Empty } from "antd";
import { useRouter } from "next/router";
import React from "react";
import { QuizNotesContainer, StyledCard } from "../index.page";

const QuizEmptyCard = () => {
  const router = useRouter();

  const handleGoQuizPage = () => {
    router.push("/quiz");
  };
  return (
    <QuizNotesContainer>
      <StyledCard title="퀴즈 오답">
        <Empty description="틀린 문제가 없습니다.">
          <Button onClick={handleGoQuizPage}>홈으로 가기</Button>
        </Empty>
      </StyledCard>
    </QuizNotesContainer>
  );
};

export { QuizEmptyCard };
