import { QuizDescription } from "@src/pages/quiz/notes/[uuid]/_components/QuizDescription";
import { QuizStepButtons } from "@src/pages/quiz/notes/[uuid]/_components/QuizStepButtons";
import { fireEvent, render } from "../_render/render";

describe("퀴즈 오답 페이지 컴포넌트 테스트 ", () => {
  it("오답해설 추가 버튼 클릭 후 해설 추가 버튼이 잘 동작해야 한다.", () => {
    const quizStepDescription = "";
    const updateQuizStepDescription = jest.fn();

    const { getByRole } = render(
      <QuizDescription
        quizStepDescription={quizStepDescription}
        updateQuizStepDescription={updateQuizStepDescription}
      />
    );

    const editButton = getByRole("button", { name: "오답해설 추가" });
    fireEvent.click(editButton);

    const textarea = getByRole("textbox");
    expect(textarea).toBeInTheDocument();

    const saveButton = getByRole("button", { name: "해설 추가" });
    fireEvent.click(saveButton);

    expect(updateQuizStepDescription).toHaveBeenCalled();
  });

  it("오답해설 추가 버튼 클릭 후 취소 클릭시 textarea 없어야 한다.", () => {
    const quizStepDescription = "";
    const updateQuizStepDescription = jest.fn();

    const { getByRole } = render(
      <QuizDescription
        quizStepDescription={quizStepDescription}
        updateQuizStepDescription={updateQuizStepDescription}
      />
    );

    const editButton = getByRole("button", { name: "오답해설 추가" });
    fireEvent.click(editButton);

    const textarea = getByRole("textbox");
    expect(textarea).toBeInTheDocument();

    const cancelButton = getByRole("button", { name: "취소" });
    fireEvent.click(cancelButton);

    expect(textarea).not.toBeInTheDocument();
  });

  it("첫 번째 퀴즈일 경우 이전 버튼 비 활성화 되어야 한다.", () => {
    const goNextStep = jest.fn();
    const goPreviousStep = jest.fn();

    const { getByRole } = render(
      <QuizStepButtons
        isFirstStep={true}
        isLastStep={false}
        goNextStep={goNextStep}
        goPreviousStep={goPreviousStep}
      />
    );

    const previousButton = getByRole("button", { name: "이전" });
    const nextButton = getByRole("button", { name: "다음" });

    expect(previousButton).toBeDisabled();
    expect(nextButton).not.toBeDisabled();
    expect(goNextStep).not.toHaveBeenCalled();

    fireEvent.click(nextButton);
    expect(goNextStep).toHaveBeenCalled();
  });

  it("첫 번째 퀴즈 및 마지막 퀴즈가 아닐 경우에 버튼 둘 다 활성화 되어야 한다.", () => {
    const goNextStep = jest.fn();
    const goPreviousStep = jest.fn();

    const { getByRole } = render(
      <QuizStepButtons
        goNextStep={goNextStep}
        goPreviousStep={goPreviousStep}
        isFirstStep={false}
        isLastStep={false}
      />
    );

    const previousButton = getByRole("button", { name: "이전" });
    const nextButton = getByRole("button", { name: "다음" });

    expect(previousButton).not.toBeDisabled();
    expect(nextButton).not.toBeDisabled();

    fireEvent.click(previousButton);
    expect(goPreviousStep).toHaveBeenCalled();

    fireEvent.click(nextButton);
    expect(goNextStep).toHaveBeenCalled();
  });

  it("먀재먁 퀴즈일 경우 다음 버튼 비 활성화 되어야 한다.", () => {
    const goNextStep = jest.fn();
    const goPreviousStep = jest.fn();

    const { getByRole } = render(
      <QuizStepButtons
        goNextStep={goNextStep}
        goPreviousStep={goPreviousStep}
        isFirstStep={false}
        isLastStep={true}
      />
    );

    const previousButton = getByRole("button", { name: "이전" });
    const nextButton = getByRole("button", { name: "다음" });

    expect(previousButton).not.toBeDisabled();
    expect(nextButton).toBeDisabled();

    expect(goNextStep).not.toHaveBeenCalled();

    fireEvent.click(previousButton);
    expect(goPreviousStep).toHaveBeenCalled();
  });
});
