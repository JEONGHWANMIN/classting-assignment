import { Flex } from "antd";
import React from "react";
import styled from "styled-components";

interface QuizAnswersResultItemProps {
  type?: "correct" | "incorrect" | "none";
  label: string;
  content: string;
}

const QuizAnswersResultItem = ({
  type = "none",
  label,
  content,
}: QuizAnswersResultItemProps) => {
  const isNoColorLabel = type === "none";
  return (
    <Flex align="center" gap={10}>
      {!isNoColorLabel && <StyledColorBoxLabel type={type}></StyledColorBoxLabel>}
      <StyledResultText>{label}</StyledResultText>
      <StyledResultText>{content}</StyledResultText>
    </Flex>
  );
};

export { QuizAnswersResultItem };

const StyledColorBoxLabel = styled.div<{ type: "correct" | "incorrect" }>`
  width: 15px;
  height: 15px;
  background-color: ${({ type, theme }) =>
    type === "correct" ? theme.colors.mainGreen[100] : theme.colors.error[300]};
`;

const StyledResultText = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.body6};
`;
