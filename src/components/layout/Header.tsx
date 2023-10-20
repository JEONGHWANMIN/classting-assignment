import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogo>
        <Link href="/quiz">Quiz</Link>
      </HeaderLogo>
    </HeaderContainer>
  );
};

export { Header };

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 12px;
  height: 50px;
  background-color: white;
`;

const HeaderLogo = styled.h3(({ theme }) => {
  return {
    fontSize: theme.typography.fontSize.h4,
    fontFamily: theme.typography.fontFamily.pretendard.semiBold,
  };
});
