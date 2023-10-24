export const getQuizResultText = (count: number, ratio: number) => {
  return `${count}개 (${ratio.toFixed(2)}%)`;
};
