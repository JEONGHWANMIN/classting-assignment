import { screen } from "@testing-library/react";
import QuizPage from "@src/pages/quiz";
import { render } from "./render/render";

describe("Home", () => {
  test('should contain the text "information"', () => {
    render(<QuizPage />); // ARRANGE

    const HelloText = screen.getByText("Hello"); // ACT

    expect(HelloText).toBeInTheDocument(); // ASSERT
  });

  test("QuizPage 컴포넌트가 렌더링되고 버튼이 존재하는지 확인", () => {
    const { getByText } = render(<QuizPage />);

    const button = getByText("버튼 테스트1");
    expect(button).toBeInTheDocument();
  });
});
