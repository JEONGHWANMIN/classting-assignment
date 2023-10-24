import { QuizDetail } from "@src/state/quiz.recoil";
import { dateUtils } from "@src/utils/dateUtils";

interface CalculateQuizResults {
  quizList: QuizDetail[];
  startTime: Date | null;
  endTime: Date | null;
}

export const calculateQuizResults = ({
  quizList,
  startTime,
  endTime,
}: CalculateQuizResults) => {
  const PERCENTAGE = 100;
  const quizCount = quizList.length;

  const correctAnswersCount = quizList.filter((quiz) => quiz.isCorrect).length;
  const inCorrectAnswersCount = quizCount - correctAnswersCount;

  const correctAnswersRatio = (correctAnswersCount / quizCount) * PERCENTAGE;
  const inCorrectAnswersRatio = (inCorrectAnswersCount / quizCount) * PERCENTAGE;

  const timeDifference = dateUtils.calculateTimeDifference(startTime, endTime);

  return {
    correctAnswersCount,
    inCorrectAnswersCount,
    correctAnswersRatio,
    inCorrectAnswersRatio,
    timeDifference,
  };
};
