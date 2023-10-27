import { Button, Flex, Space } from "antd";
import React, { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";

interface QuizDescriptionProps {
  quizStepDescription: string;
  updateQuizStepDescription: (description: string) => void;
}

const QuizDescription = ({
  quizStepDescription,
  updateQuizStepDescription,
}: QuizDescriptionProps) => {
  const [description, setDescription] = useState("");
  const [isEditMode, setIdEditMode] = useState(false);

  useEffect(() => {
    setDescription(quizStepDescription);
  }, [quizStepDescription, isEditMode]);

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const changeDisabled = () => {
    setIdEditMode((isEditMode) => !isEditMode);
  };

  const cancelQuizDescription = () => {
    changeDisabled();
  };

  const saveQuizDescription = () => {
    changeDisabled();
    updateQuizStepDescription(description);
  };

  return (
    <DescribeContainer>
      {isEditMode ? (
        <QuizContentContainer>
          <StyledButtonContainer>
            <Button onClick={cancelQuizDescription}>취소</Button>
            <Button type="primary" onClick={saveQuizDescription}>
              해설 추가
            </Button>
          </StyledButtonContainer>
          <StyledTextArea
            autoFocus
            rows={10}
            disabled={!isEditMode}
            value={isEditMode ? description : quizStepDescription}
            onChange={onChange}
          />
        </QuizContentContainer>
      ) : (
        <QuizContentContainer>
          <StyledButtonContainer>
            <Button onClick={changeDisabled}>오답해설 추가</Button>
          </StyledButtonContainer>
          {quizStepDescription && (
            <StyledDescription>{quizStepDescription}</StyledDescription>
          )}
        </QuizContentContainer>
      )}
    </DescribeContainer>
  );
};

export { QuizDescription };

const DescribeContainer = styled(Flex)`
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
`;

const QuizContentContainer = styled(Flex)`
  width: 100%;
  flex-direction: column;
  gap: 4px;
`;
const StyledDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray[700]};
  font-size: ${({ theme }) => theme.typography.fontSize.body6};
  white-space: pre-wrap;
  text-align: left;
  min-height: 100px;
  max-height: 200px;
  line-height: 1.2;
  padding: 8px;
  letter-spacing: 0.4;
  overflow-y: scroll;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  resize: none;
  color: ${({ theme }) => theme.colors.gray[700]};
  border: ${({ theme }) => theme.colors.gray[500]} solid 1px;
  outline-color: ${({ theme }) => theme.colors.mainGreen[200]};
  border-radius: 4px;
  padding: 8px;
  line-height: 1.2;
  letter-spacing: 0.4;
`;

const StyledButtonContainer = styled(Space)`
  margin-top: 20px;
`;
