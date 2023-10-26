import { fireEvent } from "@testing-library/react";
import React from "react";
import { CoreDialog } from "@src/components/core/CoreDialog";
import { CoreSelect } from "@src/components/core/CoreSelect";
import { render } from "@src/__test__/ui/_render/render";

describe("공통 컴포넌트 테스트", () => {
  it("Props에 따른 다이얼로그 컴포넌트 렌더링 및 버튼 이벤트 동작 확인", () => {
    const mockOnOk = jest.fn();
    const mockOnCancel = jest.fn();

    const { getByText } = render(
      <CoreDialog
        title="안녕하세요"
        open={true}
        onOk={mockOnOk}
        onCancel={mockOnCancel}
        okText="확인"
        cancelText="취소"
      />
    );

    const dialogElement = getByText("안녕하세요");
    expect(dialogElement).toBeInTheDocument();

    const okButton = getByText("확인");
    fireEvent.click(okButton);
    expect(mockOnOk).toHaveBeenCalled();

    const cancelButton = getByText("취소");
    fireEvent.click(cancelButton);
    expect(mockOnCancel).toHaveBeenCalled();
  });

  it("셀렉트 컴포넌트 렌더링 확인", () => {
    const selectLabel = "Select Label";
    const selectItems = [
      { key: "1", value: 5, label: "5개" },
      { key: "2", value: 10, label: "10개" },
    ];

    const handleSelectChange = jest.fn();

    const { getByRole, getByText } = render(
      <CoreSelect
        name="select"
        selectLabel={selectLabel}
        selectItems={selectItems}
        handleSelectChange={handleSelectChange}
        placeholder="선택"
      />
    );

    const selectElement = getByRole("combobox");
    expect(selectElement).toBeInTheDocument();

    const finedSelectComponents = getByText("선택");
    expect(finedSelectComponents).toBeInTheDocument();
  });
});
