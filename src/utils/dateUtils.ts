export const dateUtils = {
  calculateTimeDifference(startDate: Date | null, endDate: Date | null) {
    if (!startDate || !endDate)
      return {
        error: true,
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
      error: false,
      hours,
      minutes,
      seconds,
    };
  },
};
