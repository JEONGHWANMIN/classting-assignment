// import { dateUtils } from "@src/utils/dateUtils";

// describe("dateUtils", () => {
//   test("올바른 시작 및 종료 시간으로 시간 차이 계산 (초 계산)", () => {
//     const startTime = new Date("2023-10-24T06:43:22Z");
//     const endTime = new Date("2023-10-24T06:43:44Z");

//     const result = dateUtils.calculateTimeDifference(startTime, endTime);

//     expect(result).toEqual({
//       hours: 0,
//       minutes: 0,
//       seconds: 22,
//     });
//   });

//   test("올바른 시작 및 종료 시간으로 시간 차이 계산 (분 계산)", () => {
//     const startTime = new Date("2023-10-24T06:43:22Z");
//     const endTime = new Date("2023-10-24T06:45:44Z");

//     const result = dateUtils.calculateTimeDifference(startTime, endTime);

//     expect(result).toEqual({
//       hours: 0,
//       minutes: 2,
//       seconds: 22,
//     });
//   });

//   test("올바른 시작 및 종료 시간으로 시간 차이 계산 (시 계산)", () => {
//     const startTime = new Date("2023-10-24T06:43:22Z");
//     const endTime = new Date("2023-10-24T08:00:00Z");

//     const result = dateUtils.calculateTimeDifference(startTime, endTime);

//     expect(result).toEqual({
//       hours: 1,
//       minutes: 16,
//       seconds: 38,
//     });
//   });

//   test("하나의 시간이 null일 때 에러 처리", () => {
//     const startTime = new Date("2023-10-24T06:43:22.602Z");
//     const endTime = null;

//     const result = dateUtils.calculateTimeDifference(startTime, endTime);

//     expect(result).toBe("");
//   });

//   test("하나의 시간이 null일 때 에러 처리", () => {
//     const startTime = new Date("2023-10-24T06:43:22.602Z");
//     const endTime = null;

//     const result = dateUtils.calculateTimeDifference(startTime, endTime);

//     expect(result).toBe("");
//   });
// });
