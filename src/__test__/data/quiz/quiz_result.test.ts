import { calculateQuizResults } from "@src/pages/quiz/result/_utils/calculateQuizResults";
import { getElapsedTimeText } from "@src/pages/quiz/result/_utils/getElapsedTimeText";
import { getQuizResultText } from "@src/pages/quiz/result/_utils/getQuizResultText";
import { QuizDetail } from "@src/state/quiz.recoil";

describe("퀴즈 결과 계산 로직 테스트", () => {
  it("퀴즈 데이터 계산 시 데이터가 정확하게 나와야 한다.", () => {
    const quizList: QuizDetail[] = [
      {
        category: "Sports",
        type: "multiple",
        difficulty: "medium",
        question:
          "Who was the British professional wrestler Shirley Crabtree better known as?",
        correct_answer: "Big Daddy",
        incorrect_answers: ["Giant Haystacks", "Kendo Nagasaki", "Masambula"],
        shuffledAnswers: ["Big Daddy", "Giant Haystacks", "Masambula", "Kendo Nagasaki"],
        description: "",
        isAnswered: true,
        isCorrect: false,
      },
      {
        category: "Entertainment: Music",
        type: "multiple",
        difficulty: "medium",
        question: "EDM record label Monstercat is based in which country?",
        correct_answer: "Canada",
        incorrect_answers: ["United States", "Australia", "United Kingdom"],
        shuffledAnswers: ["United States", "United Kingdom", "Canada", "Australia"],
        description: "",
        isAnswered: true,
        isCorrect: true,
      },
      {
        category: "Entertainment: Music",
        type: "multiple",
        difficulty: "medium",
        question: "EDM record label Monstercat is based in which country?",
        correct_answer: "Canada",
        incorrect_answers: ["United States", "Australia", "United Kingdom"],
        shuffledAnswers: ["United States", "United Kingdom", "Canada", "Australia"],
        description: "",
        isAnswered: true,
        isCorrect: true,
      },
    ];

    const startTime = new Date("2023-10-27T10:00:00");
    const endTime = new Date("2023-10-27T11:15:20");

    const results = calculateQuizResults({ quizList, startTime, endTime });

    const expectedResults = {
      correctAnswersCount: 2,
      inCorrectAnswersCount: 1,
      correctAnswersRatio: 66,
      inCorrectAnswersRatio: 33,
      timeDifference: {
        hours: 1,
        minutes: 15,
        seconds: 20,
      },
    };

    expect(results).toEqual(expectedResults);
  });

  it("퀴즈 계산 시간이 정확하게 계산되어야 한다. 시 분 초 다 렌더링 되어야 한다.(시 분 초)", () => {
    const hours = 2;
    const minutes = 15;
    const seconds = 45;

    const result = getElapsedTimeText({ hours, minutes, seconds });

    expect(result).toBe("2시간 15분 45초");
  });

  it("퀴즈 계산 시간이 정확하게 계산되어야 한다. (분 초)", () => {
    const hours = 0;
    const minutes = 15;
    const seconds = 12;

    const result = getElapsedTimeText({ hours, minutes, seconds });

    expect(result).toBe("15분 12초");
  });

  it("퀴즈 계산 시간이 정확하게 계산되어야 한다. (초)", () => {
    const hours = 0;
    const minutes = 0;
    const seconds = 48;

    const result = getElapsedTimeText({ hours, minutes, seconds });

    expect(result).toBe("48초");
  });

  it("문제 숫자 및 비율이 주어지면 정확한 텍스트를 계산해서 리턴한다.", () => {
    const count = 2;
    const ratio = 66;

    const result = getQuizResultText(count, ratio);

    const expectedText = "2개 (66%)";

    expect(result).toBe(expectedText);
  });

  it("0이 주어졌을 시 0에 대한 텍스트를 계산해서 리턴한다.", () => {
    const result = getQuizResultText(0, 0);

    const expectedText = "0개 (0%)";

    expect(result).toBe(expectedText);
  });
});
