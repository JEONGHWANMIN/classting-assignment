import { fireEvent } from "@testing-library/react";
import React from "react";
import { QuizRadioGroup } from "@src/pages/quiz/_components/QuizRadioGroup";
import { QuizCardBottomButton } from "@src/pages/quiz/process/_components/QuizCardBottomButton";
import { render } from "@src/__test__/ui/_render/render";

describe("퀴즈 진행 페이지 컴포넌트 테스트", () => {
  it("퀴즈를 안풀었을 경우 라디오 버튼이 활성화 되어야 한다.", () => {
    const quizAnswers = ["기호 1번", "기호 2번", "기호 3번", "기호 4번"];
    const correctAnswer = "기호 2번";
    const isQuizAnswered = false;
    const userAnswer = undefined;
    const onChange = jest.fn();

    const { getByText } = render(
      <QuizRadioGroup
        quizAnswers={quizAnswers}
        isQuizAnswered={isQuizAnswered}
        correctAnswer={correctAnswer}
        userAnswer={userAnswer}
        onChange={onChange}
      />
    );

    quizAnswers.forEach((answer) => {
      const radioLabel = getByText(answer);
      expect(radioLabel).toBeInTheDocument();
    });

    const firstRadioLabel = getByText(quizAnswers[0]);
    fireEvent.click(firstRadioLabel);

    expect(onChange).toHaveBeenCalled();
  });

  it("퀴즈를 풀었을 경우 라디오 버튼 비 활성화 되어야 한다.", () => {
    const quizAnswers = ["기호 1번", "기호 2번", "기호 3번", "기호 4번"];
    const correctAnswer = "기호 2번";
    const isQuizAnswered = true;
    const userAnswer = "";
    const onChange = jest.fn();

    const { getByText } = render(
      <QuizRadioGroup
        quizAnswers={quizAnswers}
        isQuizAnswered={isQuizAnswered}
        correctAnswer={correctAnswer}
        userAnswer={userAnswer}
        onChange={onChange}
      />
    );

    quizAnswers.forEach((answer) => {
      const radioLabel = getByText(answer);
      expect(radioLabel).toBeInTheDocument();
    });

    const firstRadioLabel = getByText(quizAnswers[0]);
    fireEvent.click(firstRadioLabel);

    expect(onChange).not.toHaveBeenCalled();
  });

  it("마지막 페이지가 아니고 현재 문제를 풀지 않았으면 정답 확인하기 버튼이 보여야 한다.", () => {
    const isQuizAnswered = false;
    const isNotNextStep = false;
    const goResultPageAndUpdateEndTime = jest.fn();
    const handleAnswerOrNextStep = jest.fn();

    const { getByRole } = render(
      <QuizCardBottomButton
        isQuizAnswered={isQuizAnswered}
        isNotNextStep={isNotNextStep}
        goResultPageAndUpdateEndTime={goResultPageAndUpdateEndTime}
        handleAnswerOrNextStep={handleAnswerOrNextStep}
      />
    );

    const button = getByRole("button", { name: "정답 확인하기" });
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(handleAnswerOrNextStep).toHaveBeenCalled();
  });

  it("마지막 페이지가 아니고 현재 문제를 풀었으면 다음 문제 풀기 버튼이 보여야 한다. ", () => {
    const isQuizAnswered = true;
    const isNotNextStep = false;
    const goResultPageAndUpdateEndTime = jest.fn();
    const handleAnswerOrNextStep = jest.fn();

    const { getByRole } = render(
      <QuizCardBottomButton
        isQuizAnswered={isQuizAnswered}
        isNotNextStep={isNotNextStep}
        goResultPageAndUpdateEndTime={goResultPageAndUpdateEndTime}
        handleAnswerOrNextStep={handleAnswerOrNextStep}
      />
    );

    const button = getByRole("button", { name: "다음 문제 풀기" });
    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    expect(handleAnswerOrNextStep).toHaveBeenCalled();
  });

  it("퀴즈를 풀고 다음 퀴즈 데이터가 없을 경우 결과 확인하기 버튼이 보여야 한다.", () => {
    const isQuizAnswered = true;
    const isNotNextStep = true;
    const goResultPageAndUpdateEndTime = jest.fn();
    const handleAnswerOrNextStep = jest.fn();

    const { getByRole } = render(
      <QuizCardBottomButton
        isQuizAnswered={isQuizAnswered}
        isNotNextStep={isNotNextStep}
        goResultPageAndUpdateEndTime={goResultPageAndUpdateEndTime}
        handleAnswerOrNextStep={handleAnswerOrNextStep}
      />
    );

    const button = getByRole("button", { name: "결과 확인하기" });
    expect(button).toBeInTheDocument();
  });
});
