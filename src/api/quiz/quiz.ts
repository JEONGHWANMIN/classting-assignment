import { QuizSetting } from "@src/pages/quiz/setting/_constant/constant";
import { customAxiosInstance } from "../instance";
import { QuizApiResponse } from "./type";

export const getQuiz = async (quizSetting: QuizSetting) => {
  const response = await customAxiosInstance.get<QuizApiResponse>("", {
    params: {
      type: "multiple",
      ...quizSetting,
    },
  });

  return response.data;
};
