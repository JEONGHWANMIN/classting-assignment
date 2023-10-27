import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { QuizDetail } from "./quiz.recoil";

export interface EndQuizKey {
  endDate: Date;
  key: string;
}

interface LocalStorageNote {
  endQuizKeys: EndQuizKey[];
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
