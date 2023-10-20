import React, { useState } from "react";
import styled from "styled-components";
import { useDropDown } from "@src/hooks/useDropDown";

export interface DropDownItem {
  key: string | number;
  value: string | number;
}

interface DropdownProps {
  items: DropDownItem[];
}

const Dropdown: React.FC<DropdownProps> = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState<DropDownItem | null>(null);
  const { handleChangeDrop, isDrop, ref } = useDropDown();

  const handleItemClick = (item: DropDownItem) => {
    setSelectedItem(item);
    handleChangeDrop(false);
  };

  return (
    <DropdownWrapper ref={ref}>
      <DropdownButton onClick={() => handleChangeDrop(true)}>
        {selectedItem ? selectedItem.value : "선택하세요"}
      </DropdownButton>
      <DropdownList isOpen={isDrop}>
        {items.map((item) => (
          <DropdownItem key={item.key} onClick={() => handleItemClick(item)}>
            {item.value}
          </DropdownItem>
        ))}
      </DropdownList>
    </DropdownWrapper>
  );
};

export default Dropdown;

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 10px;
  border: none;
  cursor: pointer;
`;

const DropdownList = styled.ul<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  list-style: none;
  margin: 0;
  padding: 0;
  border: 1px solid #ccc;
  border-top: none;
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

const DropdownItem = styled.li`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;
