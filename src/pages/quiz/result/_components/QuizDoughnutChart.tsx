import React from "react";
import { styledTheme } from "@src/styles/styledTheme";
import { CoreDoughnutChart } from "@src/components/core/CoreDoughnutChart";

interface QuizDoughnutChartProps {
  correctAnswersRatio: number;
  inCorrectAnswersRatio: number;
}

const QuizDoughnutChart = ({
  correctAnswersRatio,
  inCorrectAnswersRatio,
}: QuizDoughnutChartProps) => {
  const quizChartData = {
    labels: ["정답", "오답"],
    datasets: [
      {
        data: [correctAnswersRatio, inCorrectAnswersRatio],
        backgroundColor: [
          styledTheme.colors.mainGreen[100],
          styledTheme.colors.error[300],
        ],
      },
    ],
  };

  return <CoreDoughnutChart data={quizChartData} />;
};

export { QuizDoughnutChart };
