import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { useState } from "react";
import { useServerSideRenderingCheck } from "@src/hooks/useServerSideRenderingCheck";
import { globalQuizNotes } from "@src/state/quizNotes.recoil";
import { QuizDetail } from "@src/state/quiz.recoil";

const useQuizNotes = () => {
  const router = useRouter();
  const { uuid } = router.query;
  const UUID = uuid as string;

  const { isServerSideRendered } = useServerSideRenderingCheck();
  const [globalQuizNote, setGlobalQuizNote] = useRecoilState(globalQuizNotes);
  const [notesStep, setNotesStep] = useState(0);

  const { endQuizList }: { endQuizList: { [key: string]: QuizDetail[] } } =
    isServerSideRendered ? { endQuizList: {} } : globalQuizNote;

  const inCorrectQuizList = endQuizList[UUID] ?? [];

  const isLastStep = inCorrectQuizList.length - 1 === notesStep;
  const isFirstStep = notesStep <= 0;

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

  const updateQuizDescriptionInGlobalList = (description: string) => {
    setGlobalQuizNote((prev) => {
      const updatedEndQuizList = { ...prev.endQuizList };
      const quizList = updatedEndQuizList[UUID] || [];

      const updatedQuizList = quizList.map((quizItem) => {
        return {
          ...quizItem,
          description:
            quizItem.question === quizQuestion ? description : quizItem.description,
        };
      });

      updatedEndQuizList[UUID] = updatedQuizList;

      return {
        ...prev,
        endQuizList: updatedEndQuizList,
      };
    });
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
    quizInfo,
    isLastStep,
    isFirstStep,
    goNextStep,
    goPreviousStep,
    updateQuizDescriptionInGlobalList,
  };
};

export { useQuizNotes };
