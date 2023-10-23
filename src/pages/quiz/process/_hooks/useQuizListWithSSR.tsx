import { message } from "antd";
import { useRecoilState } from "recoil";
import { globalQuizState } from "@src/state/quiz.recoil";
import { useServerSideRenderingCheck } from "@src/hooks/useServerSideRenderingCheck";
import { useGlobalDialog } from "@src/hooks/useGlobalDialog";

const useQuizListWithSSR = () => {
  const { isServerSideRendered } = useServerSideRenderingCheck();
  const [globalQuiz, setGlobalQuiz] = useRecoilState(globalQuizState);
  const { showConfirmDialog, setGlobalDialogConfig } = useGlobalDialog();

  const quizList = isServerSideRendered ? [] : globalQuiz.quizList;
  const step = isServerSideRendered ? 0 : globalQuiz.step;
  const lastStep = step === quizList.length - 1;

  const getCurrentStepQuiz = () => quizList[step] || {};
  const {
    question: quizQuestion = "-",
    shuffledAnswers: quizAnswers = [],
    difficulty: quizDifficulty = "easy",
    category: quizCategory = "-",
    isAnswered: isQuizAnswered = false,
    correct_answer: correctAnswer = "-",
    isCorrect,
  } = getCurrentStepQuiz();

  const handleAnswerSubmission = (selectAnswer: string) => {
    const isCorrect = selectAnswer === correctAnswer;
    const updatedQuizList = [...quizList];
    updatedQuizList[step] = {
      ...getCurrentStepQuiz(),
      isAnswered: true,
      userAnswer: selectAnswer,
      isCorrect,
    };
    setGlobalQuiz((prev) => ({
      ...prev,
      quizList: updatedQuizList,
    }));

    isCorrect
      ? message.success("맞았어요! 정답입니다.")
      : message.error("틀렸어요! 정답이 아닙니다.");
  };

  const confirmAnswerSubmission = (selectAnswer: string) => {
    if (!selectAnswer) {
      showConfirmDialog("정답을 선택했는지 확인해주세요 :)");
      return;
    }

    setGlobalDialogConfig({
      title: "정답을 확인하시겠습니까?",
      cancelText: "취소",
      onOk: () => handleAnswerSubmission(selectAnswer),
      okText: "확인",
    });
  };

  const handleGoNextStep = () => {
    setGlobalQuiz((prev) => ({ ...prev, step: prev.step + 1 }));
  };

  const quizInfo = {
    quizQuestion,
    quizAnswers,
    quizDifficulty,
    quizCategory,
    isQuizAnswered,
    isCorrect,
  };

  return {
    step,
    lastStep,
    quizInfo,
    handleGoNextStep,
    confirmAnswerSubmission,
  };
};

export { useQuizListWithSSR };