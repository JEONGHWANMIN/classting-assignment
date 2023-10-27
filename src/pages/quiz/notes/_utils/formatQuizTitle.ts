export const formatQuizTitle = (endDate = new Date()) => {
  const date = new Date(endDate);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${month}월 ${day}일 ${hours}시 ${minutes}분에 진행한 퀴즈`;
};
