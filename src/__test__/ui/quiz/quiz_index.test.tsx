import { QuizIndexButtons } from "@src/pages/quiz/_components/QuizIndexButtons";
import { fireEvent, render } from "../_render/render";

describe("퀴즈 페이지 컴포넌트 테스트", () => {
  it("퀴즈 진행중이 아니면서 틀린문제가 있을 시 오답 노트 버튼이 보여야 한다.", () => {
    const handleGoSettingPage = jest.fn();
    const handleGoNotesPage = jest.fn();

    const { getByRole } = render(
      <QuizIndexButtons
        isShowGoNotesButton={true}
        handleGoSettingPage={handleGoSettingPage}
        handleGoNotesPage={handleGoNotesPage}
      />
    );

    const startButton = getByRole("button", { name: "퀴즈 시작" });
    const notesButton = getByRole("button", { name: "오답 노트" });

    fireEvent.click(startButton);
    expect(handleGoSettingPage).toHaveBeenCalled();

    fireEvent.click(notesButton);
    expect(handleGoNotesPage).toHaveBeenCalled();
  });

  it("퀴즈 진행중 이거나 틀린문제가 없을 시 오답 버튼이 보이지 않아야 한다.", () => {
    const handleGoSettingPage = jest.fn();
    const handleGoNotesPage = jest.fn();

    const { getByRole, queryByRole } = render(
      <QuizIndexButtons
        isShowGoNotesButton={false}
        handleGoSettingPage={handleGoSettingPage}
        handleGoNotesPage={handleGoNotesPage}
      />
    );

    const startButton = getByRole("button", { name: "퀴즈 시작" });
    const notesButton = queryByRole("button", { name: "오답 노트" });

    expect(startButton).toBeInTheDocument();
    expect(notesButton).toBeNull();
  });
});
