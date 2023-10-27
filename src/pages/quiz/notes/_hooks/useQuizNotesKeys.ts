import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { useServerSideRenderingCheck } from "@src/hooks/useServerSideRenderingCheck";
import { globalQuizNotes } from "@src/state/quizNotes.recoil";

const useQuizNotesKeys = () => {
  const router = useRouter();
  const { isServerSideRendered } = useServerSideRenderingCheck();
  const globalQuizNote = useRecoilValue(globalQuizNotes);

  const handleGoNoteDetail = (uuid: string) => {
    router.push(`/quiz/notes/${uuid}`);
  };

  const quizNotes = isServerSideRendered
    ? {
        endQuizKeys: [],
        endQuizList: {},
      }
    : globalQuizNote;

  const quizNotesKeys = quizNotes.endQuizKeys;

  return { quizNotesKeys, handleGoNoteDetail };
};

export { useQuizNotesKeys };
