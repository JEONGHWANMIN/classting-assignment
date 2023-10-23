import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { QuizQuestion } from "../api/quiz/type";

export interface LocalStorageQuiz {
  startTime: null | Date;
  endTime: null | Date;
  quizList: QuizDetail[];
  step: number;
}

export interface QuizDetail extends QuizQuestion {
  userAnswer?: string;
  isAnswered: boolean;
  isCorrect?: boolean;
  shuffledOptions: string[];
}

const { persistAtom: quizPersistAtom } = recoilPersist({
  converter: JSON,
  key: "quiz",
});

export const globalQuizState = atom<LocalStorageQuiz>({
  key: "quiz",
  default: {
    startTime: null,
    endTime: null,
    quizList: [],
    step: 0,
  },
  effects_UNSTABLE: [quizPersistAtom],
});