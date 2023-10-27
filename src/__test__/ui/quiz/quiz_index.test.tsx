import { QuizIndexButtons } from "@src/pages/quiz/_components/QuizIndexButtons";
import { render } from "../_render/render";

describe("퀴즈 페이지 컴포넌트 테스트", () => {
  it("퀴즈 페이지에 버튼이 잘 렌더링 되어야 한다.", () => {
    const handleGoSettingPage = jest.fn();
    const handleGoNotesPage = jest.fn();

    const { getByRole, queryByRole } = render(
      <QuizIndexButtons
        handleGoSettingPage={handleGoSettingPage}
        handleGoNotesPage={handleGoNotesPage}
      />
    );

    const startButton = getByRole("button", { name: "퀴즈 시작" });
    const notesButton = queryByRole("button", { name: "오답 노트" });

    expect(startButton).toBeInTheDocument();
    expect(notesButton).toBeInTheDocument();
  });
});
