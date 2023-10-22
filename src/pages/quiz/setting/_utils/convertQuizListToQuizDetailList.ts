import { QuizQuestion } from "@src/api/quiz/type";
import { shuffleArray } from "@src/utils/shuffleArray";

export const convertQuizListToQuizDetailList = (quizList: QuizQuestion[]) => {
  const quizDetailList = quizList.map((quiz) => {
    const answers = [quiz.correct_answer, ...quiz.incorrect_answers];
    const shuffledQuizList = shuffleArray(answers);

    return {
      ...quiz,
      shuffledQuizList,
      isAnswered: false,
    };
  });

  return quizDetailList;
};
