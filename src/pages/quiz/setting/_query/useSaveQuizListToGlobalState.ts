import { useState } from "react";
import axios from "axios";
import { useGlobalDialog } from "@src/hooks/useGlobalDialog";
import { getQuiz } from "@src/api/quiz/quiz";
import { QuizSetting } from "../_constant/constant";

const useSaveQuizListToGlobalState = () => {
  const [isLoadingQuizList, setIsLoadingQuizList] = useState(false);
  const { showConfirmDialog, setGlobalDialogConfig } = useGlobalDialog();

  const saveQuizList = async (quizSetting: QuizSetting) => {
    setIsLoadingQuizList(true);

    try {
      const { results: quizList } = await getQuiz(quizSetting);

      const isEmptyQuizList = quizList.length === 0;

      if (isEmptyQuizList) {
        setGlobalDialogConfig({
          title: "설정된 옵션에 맞는 퀴즈가 없습니다.",
          children: "다른 설정으로 변경하여 시도해주세요 : )",
          isSingleButton: true,
        });
        return;
      }
    } catch (e) {
      if (axios.isAxiosError(e)) {
        showConfirmDialog("퀴즈 목록을 불러오지 못했습니다.");
      }
    }

    setIsLoadingQuizList(false);
  };

  return { isLoadingQuizList, saveQuizList };
};

export { useSaveQuizListToGlobalState };
