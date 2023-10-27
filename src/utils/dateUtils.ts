import { KOR_TIME_UNIT } from "@src/constant/constant";

export type TimeUnit = "hours" | "minutes" | "seconds";

export const dateUtils = {
  calculateTimeDifference(startDate: Date | null, endDate: Date | null) {
    if (!startDate || !endDate)
      return {
        hours: 0,
        minutes: 0,
        seconds: 0,
      };

    const startTime = new Date(startDate);
    const endTime = new Date(endDate);

    const timeDifference = endTime.getTime() - startTime.getTime();

    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
    const seconds = Math.floor((timeDifference / 1000) % 60);

    return {
      hours,
      minutes,
      seconds,
    };
  },

  formatTimeUnitToKorUnit(time: number, unit: TimeUnit) {
    return time > 0 ? `${time}${KOR_TIME_UNIT[unit]}` : "";
  },
};
