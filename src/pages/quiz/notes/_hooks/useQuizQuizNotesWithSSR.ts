import { useRecoilState } from "recoil";
import { useState } from "react";
import { useServerSideRenderingCheck } from "@src/hooks/useServerSideRenderingCheck";
import { globalQuizState } from "@src/state/quiz.recoil";

const useQuizResultWithSSR = () => {
  const { isServerSideRendered } = useServerSideRenderingCheck();
  const [globalQuiz, setGlobalQuiz] = useRecoilState(globalQuizState);
  const [notesStep, setNotesStep] = useState(0);

  const { quizList } = isServerSideRendered ? { quizList: [] } : globalQuiz;

  const inCorrectQuizList = quizList.filter((quiz) => !quiz.isCorrect);

  const isLastStep = inCorrectQuizList.length - 1 === notesStep;

  const goNextStep = () => {
    setNotesStep((prevNoteStep) => prevNoteStep + 1);
  };

  const goPreviousStep = () => {
    setNotesStep((prevNoteStep) => prevNoteStep - 1);
  };

  const getCurrentStepQuiz = () => inCorrectQuizList[notesStep] || {};

  const {
    question: quizQuestion = "-",
    shuffledAnswers: quizAnswers = [],
    difficulty: quizDifficulty = "easy",
    category: quizCategory = "-",
    isAnswered: isQuizAnswered = false,
    correct_answer: correctAnswer = "-",
    userAnswer,
    description,
  } = getCurrentStepQuiz();

  const updateQuizStepDescription = (description: string) => {
    const updatedQuizList = [...inCorrectQuizList];
    updatedQuizList[notesStep] = {
      ...getCurrentStepQuiz(),
      description,
    };
    setGlobalQuiz((prev) => ({
      ...prev,
      quizList: updatedQuizList,
    }));
  };

  const quizInfo = {
    quizQuestion,
    isQuizAnswered,
    correctAnswer,
    quizAnswers,
    userAnswer,
    description,
    quizCategory,
    quizDifficulty,
  };

  return {
    notesStep,
    quizInfo,
    isLastStep,
    goNextStep,
    goPreviousStep,
    updateQuizStepDescription,
  };
};

export { useQuizResultWithSSR };
