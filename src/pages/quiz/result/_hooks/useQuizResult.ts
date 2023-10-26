import { useRecoilValue } from "recoil";
import { useServerSideRenderingCheck } from "@src/hooks/useServerSideRenderingCheck";
import { globalQuizState } from "@src/state/quiz.recoil";
import { calculateQuizResults } from "../_utils/calculateQuizResults";
import { getQuizResultText } from "../_utils/getQuizResultText";
import { getElapsedTimeText } from "../_utils/getElapsedTimeText";

const useQuizResult = () => {
  const { isServerSideRendered } = useServerSideRenderingCheck();
  const globalQuiz = useRecoilValue(globalQuizState);

  const { quizList, startTime, endTime } = isServerSideRendered
    ? { quizList: [], startTime: null, endTime: null }
    : globalQuiz;

  const results = calculateQuizResults({ quizList, startTime, endTime });

  const { hours, minutes, seconds } = results.timeDifference;
  const elapsedTimeText = getElapsedTimeText({ hours, minutes, seconds });

  const correctResultText = getQuizResultText(
    results.correctAnswersCount,
    results.correctAnswersRatio
  );
  const inCorrectResultText = getQuizResultText(
    results.inCorrectAnswersCount,
    results.inCorrectAnswersRatio
  );

  return {
    resultTexts: {
      correctResultText,
      inCorrectResultText,
      elapsedTimeText,
    },
    correctAnswersRatio: results.correctAnswersRatio,
    inCorrectAnswersRatio: results.inCorrectAnswersRatio,
  };
};

export { useQuizResult };
