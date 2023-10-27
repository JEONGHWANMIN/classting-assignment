import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { useServerSideRenderingCheck } from "@src/hooks/useServerSideRenderingCheck";
import { globalQuizNotes } from "@src/state/quizNotes.recoil";
import { useGlobalDialog } from "@src/hooks/useGlobalDialog";
import { styledTheme } from "@src/styles/styledTheme";

const useQuizNotesKeys = () => {
  const router = useRouter();
  const { setGlobalDialogConfig } = useGlobalDialog();
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

  const showConfirmDeleteQuizNote = (uuid: string) => {
    setGlobalDialogConfig({
      title: "해당 오답목록을 삭제하시겠습니까?",
      okButtonProps: {
        style: {
          backgroundColor: styledTheme.colors.error[500],
        },
      },
      onOk: () => deleteQuizNoteById(uuid),
      cancelText: "취소",
      okText: "삭제",
    });
  };

  const quizNotesKeys = quizNotes.endQuizKeys;

  return { quizNotesKeys, handleGoNoteDetail, showConfirmDeleteQuizNote };
};

export { useQuizNotesKeys };
