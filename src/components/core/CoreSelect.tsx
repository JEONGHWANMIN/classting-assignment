import { Flex, Select, SelectProps } from "antd";
import { LabeledValue } from "antd/es/select";
import React from "react";
import styled from "styled-components";

export type handleSelectChangeType = (name: string, value: string | number) => void;

interface CoreSelectProps extends SelectProps {
  name: string;
  selectItems: LabeledValue[];
  selectLabel: string;
  handleSelectChange: handleSelectChangeType;
}

const CoreSelect = ({
  name,
  selectLabel,
  selectItems,
  handleSelectChange,
  ...props
}: CoreSelectProps) => {
  const onChange = (value: string | number) => {
    handleSelectChange(name, value);
  };

  return (
    <StyledFlex>
      <StyledLabel>{selectLabel}</StyledLabel>
      <StyledSelect onChange={(value) => onChange(value)} {...props}>
        {selectItems.map((selectItem) => (
          <Select.Option key={selectItem.key} value={selectItem.value}>
            {selectItem.label}
          </Select.Option>
        ))}
      </StyledSelect>
    </StyledFlex>
  );
};

export { CoreSelect };

const StyledFlex = styled(Flex)`
  flex-direction: column;
  align-items: start;
`;

const StyledSelect = styled(Select)`
  width: 100%;
  height: 40px;
`;

const StyledLabel = styled.h6`
  color: ${({ theme }) => theme.colors.gray[800]};
`;
