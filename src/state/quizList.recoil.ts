import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { QuizQuestion } from "./../api/quiz/type";

export interface QuizDetail extends QuizQuestion {
  userAnswer?: string;
  isAnswered: boolean;
  isCorrect?: boolean;
  shuffledQuizList: string[];
}

const { persistAtom: quizPersistAtom } = recoilPersist({
  converter: JSON,
  key: "quizList",
});

export const globalQuizList = atom<QuizDetail[]>({
  key: "quizList",
  default: [],
  effects_UNSTABLE: [quizPersistAtom],
});
