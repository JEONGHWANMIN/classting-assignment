import React from "react";
import { QuizResultItem } from "./QuizResultItem";

interface QuizResultInfoProps {
  correctResultText: string;
  inCorrectResultText: string;
  elapsedTimeText: string;
}

const QuizResultInfo = ({
  correctResultText,
  elapsedTimeText,
  inCorrectResultText,
}: QuizResultInfoProps) => {
  return (
    <>
      <QuizResultItem type="correct" label="정답" content={correctResultText} />
      <QuizResultItem type="incorrect" label="오답" content={inCorrectResultText} />
      <QuizResultItem label="걸린시간" content={elapsedTimeText} />
    </>
  );
};

export { QuizResultInfo };
