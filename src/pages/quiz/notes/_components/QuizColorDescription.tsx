import { Flex } from "antd";
import React from "react";
import styled from "styled-components";

interface QuizColorDescriptionProps {
  text: string;
  customColor: string;
}

const QuizColorDescription = ({ customColor, text }: QuizColorDescriptionProps) => {
  const colorStyle = { backgroundColor: customColor };
  return (
    <Flex gap={10} align="center">
      <StyledColor style={colorStyle} />
      <DescriptionText>{text}</DescriptionText>
    </Flex>
  );
};

export { QuizColorDescription };

const DescriptionText = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.body6};
`;

const StyledColor = styled.div`
  width: 15px;
  height: 15px;
`;
