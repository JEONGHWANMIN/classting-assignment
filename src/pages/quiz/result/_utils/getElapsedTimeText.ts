import { dateUtils } from "@src/utils/dateUtils";

interface GetElapsedTimeText {
  hours: number;
  minutes: number;
  seconds: number;
}

export const getElapsedTimeText = ({ hours, minutes, seconds }: GetElapsedTimeText) => {
  const hoursText = dateUtils.formatTimeUnitToKorUnit(hours, "hours");
  const minutesText = dateUtils.formatTimeUnitToKorUnit(minutes, "minutes");
  const secondsText = dateUtils.formatTimeUnitToKorUnit(seconds, "seconds");

  const elapsedTimeText = [hoursText, minutesText, secondsText].filter(Boolean).join(" ");

  return elapsedTimeText;
};
