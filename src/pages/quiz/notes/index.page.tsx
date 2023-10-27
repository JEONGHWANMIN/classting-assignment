import { Card, Flex, Space } from "antd";
import React from "react";
import styled from "styled-components";
import { useQuizNotesKeys } from "./_hooks/useQuizNotesKeys";
import { QuizNoteTitleList } from "./_components/QuizNoteTitleList";

const QuizNotePage = () => {
  const { quizNotesKeys, handleGoNoteDetail, showConfirmDeleteQuizNote } =
    useQuizNotesKeys();

  return (
    <QuizNotesContainer>
      <StyledCard title="퀴즈 오답 목록">
        <QuizTitleContainer>
          <QuizNoteTitleList
            quizNotesKeys={quizNotesKeys}
            showConfirmDeleteQuizNote={showConfirmDeleteQuizNote}
            handleGoNoteDetail={handleGoNoteDetail}
          />
        </QuizTitleContainer>
      </StyledCard>
    </QuizNotesContainer>
  );
};

export default QuizNotePage;

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

  .ant-card-head-title {
    white-space: normal;
  }

  @media (max-width: 430px) {
    width: 90vw;
  }
`;

const QuizTitleContainer = styled(Flex)`
  max-height: 500px;
  overflow-y: scroll;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.colors.mainGreen[200]};
`;
