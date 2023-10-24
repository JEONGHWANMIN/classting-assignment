import { QuizDetail } from "@src/state/quiz.recoil";
import { dateUtils } from "@src/utils/dateUtils";

interface CalculateQuizResults {
  quizList: QuizDetail[];
  quizStartTime: Date | null;
  quizEndTime: Date | null;
}

export const calculateQuizResults = ({
  quizList,
  quizEndTime,
  quizStartTime,
}: CalculateQuizResults) => {
  const correctAnswersCount = quizList.filter((quiz) => quiz.isCorrect).length;
  const inCorrectAnswersCount = quizList.length - correctAnswersCount;
  const correctAnswersRatio = correctAnswersCount / quizList.length;
  const inCorrectAnswersRatio = inCorrectAnswersCount / quizList.length;
  const timeDifference = dateUtils.calculateTimeDifference(quizStartTime, quizEndTime);

  return {
    correctAnswersCount,
    inCorrectAnswersCount,
    correctAnswersRatio,
    inCorrectAnswersRatio,
    timeDifference,
  };
};
