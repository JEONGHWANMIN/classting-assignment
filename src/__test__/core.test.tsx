import React from "react";
import { screen } from "@testing-library/react";
import { CoreSelect } from "@src/components/core/CoreSelect";
import { render } from "./_render/render";

describe("공통 컴포넌트 테스트", () => {
  test("공통 컴포넌트", () => {
    const mockHandleSelectChange = jest.fn();

    const selectItems = [
      { key: "1", value: "value1", label: "Label 1" },
      { key: "2", value: "value2", label: "Label 2" },
    ];

    const coreSelectProps = {
      name: "testName",
      selectLabel: "Test Label",
      selectItems,
      handleSelectChange: mockHandleSelectChange,
    };

    render(<CoreSelect {...coreSelectProps} />);

    expect(screen.getByText("Test Label")).toBeInTheDocument();

    //   selectItems.forEach((item) => {
    //     expect(screen.getByText(item.label)).toBeInTheDocument();
    //   });

    //   fireEvent.change(screen.getByRole("combobox"), {
    //     target: { value: "value2" },
    //   });
    //   expect(mockHandleSelectChange).toHaveBeenCalledWith("testName", "value2");
  });
});
