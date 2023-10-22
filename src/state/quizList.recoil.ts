import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { QuizQuestion } from "./../api/quiz/type";

export interface QuizQuestionDetails extends QuizQuestion {
  userAnswer?: string;
  isAnswered: boolean;
  isCorrect?: boolean;
}

const { persistAtom: quizPersistAtom } = recoilPersist({
  converter: JSON,
  key: "quizList",
  storage: localStorage,
});

export const globalQuizList = atom<QuizQuestionDetails[]>({
  key: "quizList",
  default: [],
  effects_UNSTABLE: [quizPersistAtom],
});
