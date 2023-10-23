import { useSetRecoilState } from "recoil";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import { QuizDetail, globalQuizState } from "@src/state/quiz.recoil";
import { useGlobalDialog } from "@src/hooks/useGlobalDialog";
import { getQuiz } from "@src/api/quiz/quiz";
import { QuizSetting } from "../_constant/constant";
import { convertQuizListToQuizDetailList } from "../_utils/convertQuizListToQuizDetailList";

const useSaveQuizToGlobalState = () => {
  const router = useRouter();
  const setGlobalQuiz = useSetRecoilState(globalQuizState);
  const [isLoadingQuizList, setIsLoadingQuizList] = useState(false);
  const { showConfirmDialog, setGlobalDialogConfig } = useGlobalDialog();

  const goQuizProcessPage = () => {
    router.push("/quiz/process");
  };

  const saveQuizToGlobalState = (quizDetailList: QuizDetail[]) => {
    setGlobalQuiz((prevQuiz) => ({
      ...prevQuiz,
      step: 0,
      endTime: null,
      startTime: new Date(),
      quizList: quizDetailList,
    }));
  };

  const saveQuizAndGoProcessPage = async (quizSetting: QuizSetting) => {
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

      const quizDetailList: QuizDetail[] = convertQuizListToQuizDetailList(quizList);

      saveQuizToGlobalState(quizDetailList);
      goQuizProcessPage();
    } catch (e) {
      if (axios.isAxiosError(e)) {
        showConfirmDialog("퀴즈 목록을 불러오지 못했습니다.");
      }
    }

    setIsLoadingQuizList(false);
  };

  return { isLoadingQuizList, saveQuizAndGoProcessPage };
};

export { useSaveQuizToGlobalState };
