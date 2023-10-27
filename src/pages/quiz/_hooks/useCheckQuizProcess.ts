import { useEffect } from "react";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { useRouter } from "next/router";
import { useServerSideRenderingCheck } from "@src/hooks/useServerSideRenderingCheck";
import { globalQuizState } from "@src/state/quiz.recoil";
import { useGlobalDialog } from "@src/hooks/useGlobalDialog";

const useCheckQuizProcess = () => {
  const router = useRouter();
  const { isServerSideRendered } = useServerSideRenderingCheck();
  const resetQuiz = useResetRecoilState(globalQuizState);
  const globalQuiz = useRecoilValue(globalQuizState);
  const { setGlobalDialogConfig } = useGlobalDialog();

  const handleGoQuizProcessPage = () => {
    router.push("/quiz/process");
  };

  const { isProcess } = isServerSideRendered ? { isProcess: false } : globalQuiz;

  useEffect(() => {
    if (isProcess) {
      setGlobalDialogConfig({
        title: "진행중인 퀴즈가 있어요",
        children: "퀴즈를 이어서 하시겠습니까?",
        onOk: () => handleGoQuizProcessPage(),
        onCancel: () => resetQuiz(),
        okText: "이어하기",
        cancelText: "취소",
      });
    }
  }, [isProcess]);
};

export { useCheckQuizProcess };
