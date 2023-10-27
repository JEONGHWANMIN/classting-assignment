import { message } from "antd";
import { useRecoilState, useSetRecoilState } from "recoil";
import { v4 as uuidv4 } from "uuid";
import { globalQuizState } from "@src/state/quiz.recoil";
import { useServerSideRenderingCheck } from "@src/hooks/useServerSideRenderingCheck";
import { useGlobalDialog } from "@src/hooks/useGlobalDialog";
import { globalQuizNotes } from "@src/state/quizNotes.recoil";

const useQuizProcessInfo = () => {
  const { isServerSideRendered } = useServerSideRenderingCheck();
  const [globalQuiz, setGlobalQuiz] = useRecoilState(globalQuizState);
  const setGlobalQuizNotes = useSetRecoilState(globalQuizNotes);
  const { setGlobalDialogConfig } = useGlobalDialog();

  const quizList = isServerSideRendered ? [] : globalQuiz.quizList;
  const step = isServerSideRendered ? 0 : globalQuiz.step;
  const lastStep = step === quizList.length - 1;

  const getCurrentStepQuiz = () => quizList[step] || {};

  const updateQuizEndTimeAndProcess = () => {
    const endDate = new Date();
    setGlobalQuiz((prev) => ({ ...prev, endTime: endDate, isProcess: false }));

    const inCorrectQuizList = globalQuiz.quizList.filter((quiz) => !quiz.isCorrect);
    const uniqueKey = uuidv4();
    setGlobalQuizNotes((prev) => ({
      endQuizKeys: [
        ...prev.endQuizKeys,
        {
          key: uniqueKey,
          endDate,
        },
      ],
      endQuizList: {
        ...prev.endQuizList,
        [uniqueKey]: inCorrectQuizList,
      },
    }));
  };

  const handleGoNextStep = () => {
    setGlobalQuiz((prev) => ({ ...prev, step: prev.step + 1 }));
  };

  const showQuizResultMessage = (isCorrect: boolean) => {
    isCorrect
      ? message.success("맞았어요! 정답입니다.")
      : message.error("틀렸어요! 정답이 아닙니다.");
  };

  const updateQuizStepInfo = (isCorrect: boolean, selectAnswer: string) => {
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
  };

  const handleAnswerSubmission = (selectAnswer: string) => {
    const isCorrect = selectAnswer === correctAnswer;

    updateQuizStepInfo(isCorrect, selectAnswer);
    showQuizResultMessage(isCorrect);
  };

  const confirmAnswerSubmission = (selectAnswer: string) => {
    if (!selectAnswer) {
      message.warning("정답을 선택했는지 확인해주세요 :)");
      return;
    }

    setGlobalDialogConfig({
      title: "정답을 확인하시겠습니까?",
      cancelText: "취소",
      onOk: () => handleAnswerSubmission(selectAnswer),
      okText: "확인",
    });
  };

  const checkAnswerOrMoveToNext = (selectedAnswer: string) => {
    isQuizAnswered ? handleGoNextStep() : confirmAnswerSubmission(selectedAnswer);
  };

  const {
    question: quizQuestion = "-",
    shuffledAnswers: quizAnswers = [],
    difficulty: quizDifficulty = "easy",
    category: quizCategory = "-",
    isAnswered: isQuizAnswered = false,
    correct_answer: correctAnswer = "-",
    isCorrect,
  } = getCurrentStepQuiz();

  const isNotNextStep = isQuizAnswered && lastStep;

  const quizInfo = {
    quizQuestion,
    quizAnswers,
    quizDifficulty,
    quizCategory,
    isQuizAnswered,
    isCorrect,
    correctAnswer,
  };

  return {
    step,
    isNotNextStep,
    quizInfo,
    checkAnswerOrMoveToNext,
    updateQuizEndTimeAndProcess,
  };
};

export { useQuizProcessInfo };
