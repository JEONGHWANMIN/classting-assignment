import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import React from "react";
import { ChartData, ChartOptions } from "chart.js";
import { Doughnut } from "react-chartjs-2";

Chart.register(ArcElement, Tooltip, Legend);

interface CoreDoughnutChartProps {
  data: ChartData<"doughnut">;
  options?: ChartOptions;
}

const CoreDoughnutChart = ({ data, options }: CoreDoughnutChartProps) => {
  return <Doughnut data={data} options={options} />;
};

export { CoreDoughnutChart };
