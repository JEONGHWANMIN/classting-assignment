import { Modal, ModalProps, Space } from "antd";
import React from "react";
import { useResetRecoilState } from "recoil";
import styled from "styled-components";
import { globalDialogConfig } from "@src/state/dialog.recoil";

export interface CoreDialogProps extends ModalProps {
  isSingleButton?: boolean;
}

const CoreDialog = ({ ...props }: CoreDialogProps) => {
  const resetDialogConfig = useResetRecoilState(globalDialogConfig);

  const handleOk = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (props.onOk) props?.onOk(e);
    resetDialogConfig();
  };

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (props.onCancel) props.onCancel(e);
    resetDialogConfig();
  };

  return (
    <StyledDialog
      {...props}
      width={400}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={(_, { OkBtn, CancelBtn }) => (
        <Space>
          {!props.isSingleButton && <CancelBtn />}
          <OkBtn />
        </Space>
      )}
    />
  );
};

export { CoreDialog };

const StyledDialog = styled(Modal)``;
