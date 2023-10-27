import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { useServerSideRenderingCheck } from "@src/hooks/useServerSideRenderingCheck";
import { globalQuizNotes } from "@src/state/quizNotes.recoil";

const useQuizNotesKeys = () => {
  const router = useRouter();
  const { isServerSideRendered } = useServerSideRenderingCheck();
  const [globalQuizNote, setGlobalQuizNote] = useRecoilState(globalQuizNotes);

  const handleGoNoteDetail = (uuid: string) => {
    router.push(`/quiz/notes/${uuid}`);
  };

  const quizNotes = isServerSideRendered
    ? {
        endQuizKeys: [],
        endQuizList: {},
      }
    : globalQuizNote;

  const deleteQuizNoteById = (uuid: string) => {
    const filteredQuizKeys = quizNotes.endQuizKeys.filter(
      (endQuiz) => endQuiz.key !== uuid
    );
    const copyNoteList = { ...quizNotes.endQuizList };
    delete copyNoteList[uuid];

    setGlobalQuizNote({
      endQuizKeys: filteredQuizKeys,
      endQuizList: copyNoteList,
    });
  };

  const quizNotesKeys = quizNotes.endQuizKeys;

  return { quizNotesKeys, handleGoNoteDetail, deleteQuizNoteById };
};

export { useQuizNotesKeys };
