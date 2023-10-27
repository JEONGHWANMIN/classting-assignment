import { Button, Flex } from "antd";
import React from "react";
import styled from "styled-components";
import { EndQuizKey } from "@src/state/quizNotes.recoil";
import { formatQuizTitle } from "../_utils/formatQuizTitle";

interface QuizNoteTitleListProps {
  quizNotesKeys: EndQuizKey[];
  handleGoNoteDetail: (uuid: string) => void;
  deleteQuizNoteById: (uuid: string) => void;
}

const QuizNoteTitleList = ({
  quizNotesKeys,
  deleteQuizNoteById,
  handleGoNoteDetail,
}: QuizNoteTitleListProps) => {
  const isEmptyNotes = quizNotesKeys.length === 0;

  return (
    <QuizTitleContainer>
      {isEmptyNotes ? (
        <p>오답 노트가 비어있습니다.</p>
      ) : (
        quizNotesKeys.map((endQuiz) => (
          <Flex key={endQuiz.key} style={{ width: "100%", gap: "10px" }}>
            <Button onClick={() => handleGoNoteDetail(endQuiz.key)} style={{ flex: 1 }}>
              {formatQuizTitle(endQuiz.endDate)}
            </Button>
            <Button danger onClick={() => deleteQuizNoteById(endQuiz.key)}>
              삭제
            </Button>
          </Flex>
        ))
      )}
    </QuizTitleContainer>
  );
};

export { QuizNoteTitleList };

const QuizTitleContainer = styled(Flex)`
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.colors.mainGreen[200]};
`;
