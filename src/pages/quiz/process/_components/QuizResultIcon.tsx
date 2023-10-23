import React from "react";
import { CheckCircleTwoTone, CloseCircleTwoTone } from "@ant-design/icons";
import styled from "styled-components";
import { styledTheme } from "@src/styles/styledTheme";

interface QuizResultIconProps {
  isQuizAnswered: boolean;
  isCorrect?: boolean;
}

const QuizResultIcon = ({ isCorrect = false, isQuizAnswered }: QuizResultIconProps) => {
  return (
    <>
      {isQuizAnswered && (
        <div>
          {isCorrect ? (
            <StyledSuccessIcon twoToneColor={styledTheme.colors.mainGreen[200]} />
          ) : (
            <StyledFailureIcon twoToneColor={styledTheme.colors.error[500]} />
          )}
        </div>
      )}
    </>
  );
};

export { QuizResultIcon };

const StyledSuccessIcon = styled(CheckCircleTwoTone)`
  font-size: ${({ theme }) => theme.typography.fontSize.body3};
`;

const StyledFailureIcon = styled(CloseCircleTwoTone)`
  font-size: ${({ theme }) => theme.typography.fontSize.body3};
`;
