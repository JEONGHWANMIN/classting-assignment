import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { QuizDetail } from "./quiz.recoil";

interface LocalStorageNote {
  endQuizKeys: string[];
  endQuizList: { [ket in string]: QuizDetail[] };
}

const { persistAtom: quizPersistAtom } = recoilPersist({
  converter: JSON,
  key: "quizNotes",
});

export const globalQuizNotes = atom<LocalStorageNote>({
  key: "quizNotes",
  default: {
    endQuizKeys: [],
    endQuizList: {},
  },
  effects_UNSTABLE: [quizPersistAtom],
});
