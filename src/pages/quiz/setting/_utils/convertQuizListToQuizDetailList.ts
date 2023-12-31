import { QuizQuestion } from "@src/api/quiz/type";
import { decodeHtmlEntities } from "@src/utils/decodeHtmlEntities";
import { shuffleArray } from "@src/utils/shuffleArray";

export const convertQuizListToQuizDetailList = (quizList: QuizQuestion[]) => {
  const quizDetailList = quizList.map((quiz) => {
    const answers = [quiz.correct_answer, ...quiz.incorrect_answers];
    const shuffledAnswers = shuffleArray(answers);
    const decodedQuestion = decodeHtmlEntities(quiz.question);

    return {
      ...quiz,
      question: decodedQuestion,
      shuffledAnswers,
      isAnswered: false,
      description: "",
    };
  });

  return quizDetailList;
};
