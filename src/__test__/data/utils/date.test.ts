import { dateUtils } from "@src/utils/dateUtils";

describe("유틸 함수 테스트", () => {
  it("시작 및 종료 날짜로 시간 차이를 올바르게 계산한다.", () => {
    const startDate = new Date("2023-10-27T10:00:00");
    const endDate = new Date("2023-10-27T11:30:15");

    const result = dateUtils.calculateTimeDifference(startDate, endDate);

    expect(result.hours).toBe(1);
    expect(result.minutes).toBe(30);
    expect(result.seconds).toBe(15);
  });

  it("유효하지 않은 입력에 대해 0을 반환한다.", () => {
    const result = dateUtils.calculateTimeDifference(null, null);

    expect(result.hours).toBe(0);
    expect(result.minutes).toBe(0);
    expect(result.seconds).toBe(0);
  });

  it("시간 및 단위가 주어지면 정확한 시간에 대한 텍스트가 나와야 한다.", () => {
    const time = 3;
    const unit = "hours";

    const result = dateUtils.formatTimeUnitToKorUnit(time, unit);

    const expectedText = "3시간";

    expect(result).toBe(expectedText);
  });

  it("0인 숫자가 주어지면 공백을 출력 한다.", () => {
    const time = 0;
    const unit = "minutes";

    const result = dateUtils.formatTimeUnitToKorUnit(time, unit);

    const expectedText = "";

    expect(result).toBe(expectedText);
  });
});
