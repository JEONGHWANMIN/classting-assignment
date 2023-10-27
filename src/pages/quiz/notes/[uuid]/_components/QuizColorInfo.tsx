import { Flex } from "antd";
import React from "react";
import styled from "styled-components";
import { styledTheme } from "@src/styles/styledTheme";
import { QuizColorDescription } from "./QuizColorDescription";

const QuizColorInfo = () => {
  return (
    <StyledFlex gap={10}>
      <QuizColorDescription text="정답" customColor={styledTheme.colors.mainGreen[200]} />
      <QuizColorDescription
        text="선택한 답"
        customColor={styledTheme.colors.warning[300]}
      />
    </StyledFlex>
  );
};

export { QuizColorInfo };

const StyledFlex = styled(Flex)`
  margin-top: 10px;
`;
