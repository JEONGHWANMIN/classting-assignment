import { useRecoilState } from "recoil";
import { useServerSideRenderingCheck } from "@src/hooks/useServerSideRenderingCheck";
import { globalQuizState } from "@src/state/quiz.recoil";
import { calculateQuizResults } from "../_utils/calculateQuizResults";

const useQuizResultWithSSR = () => {
  const { isServerSideRendered } = useServerSideRenderingCheck();
  const [globalQuiz, setGlobalQuiz] = useRecoilState(globalQuizState);

  const quizList = isServerSideRendered ? [] : globalQuiz.quizList;
  const quizStartTime = isServerSideRendered ? null : globalQuiz.startTime;
  const quizEndTime = isServerSideRendered ? null : globalQuiz.endTime;

  const results = calculateQuizResults({ quizList, quizStartTime, quizEndTime });

  return {
    ...results,
  };
};

export { useQuizResultWithSSR };
