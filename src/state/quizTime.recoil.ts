import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom: quizTimePersistAtom } = recoilPersist({
  converter: JSON,
  key: "quizTime",
});

export const quizTimeAtom = atom<{
  startTime: Date | null;
  endTime: Date | null;
}>({
  key: "quizTime",
  default: { startTime: null, endTime: null },
  effects_UNSTABLE: [quizTimePersistAtom],
});
