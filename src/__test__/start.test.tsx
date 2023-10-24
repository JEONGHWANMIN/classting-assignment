import { screen } from "@testing-library/react";
import { render } from "./_render/render";

describe("Home", () => {
  test("Hello라는 텍스트가 들어 있는지 확인", () => {
    render(<h1>Hello</h1>); // ARRANGE

    const HelloText = screen.getByText("Hello"); // ACT

    expect(HelloText).toBeInTheDocument(); // ASSERT
  });
});
