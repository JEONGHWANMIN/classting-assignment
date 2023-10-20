import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <main>
        <HHE1>1 세상에 이런 폰트가 나오다니 천재인듯</HHE1>
        <HHE2>2 세상에 이런 폰트가 나오다니 천재인듯</HHE2>
        <HHE3>3 세상에 이런 폰트가 나오다니 천재인듯</HHE3>
        <div>123</div>
      </main>
    </>
  );
}

const HH = styled.div(({ theme }) => ({
  color: theme.colors.mainGreen[300],
}));

const HHE1 = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.body1};
  font-family: ${({ theme }) =>
    theme.typography.fontFamily.pretendard.semiBold};
`;

const HHE2 = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.body1};
  font-family: ${({ theme }) => theme.typography.fontFamily.pretendard.medium};
`;

const HHE3 = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.body1};
  font-family: ${({ theme }) => theme.typography.fontFamily.pretendard.regular};
`;
