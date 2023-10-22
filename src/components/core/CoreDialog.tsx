import { Modal, ModalProps, Space } from "antd";
import React from "react";
import { useRecoilValue, useResetRecoilState } from "recoil";
import styled from "styled-components";
import { globalDialogConfig } from "@src/state/dialog.recoil";

export interface CoreDialogProps extends ModalProps {
  isSingleButton?: boolean;
}

const CoreDialog = () => {
  const dialogConfig = useRecoilValue(globalDialogConfig);
  const resetDialogConfig = useResetRecoilState(globalDialogConfig);

  const handleOk = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (dialogConfig.onOk) dialogConfig?.onOk(e);
    resetDialogConfig();
  };

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (dialogConfig.onCancel) dialogConfig.onCancel(e);
    resetDialogConfig();
  };

  return (
    <StyledDialog
      {...dialogConfig}
      width={400}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={(_, { OkBtn, CancelBtn }) => (
        <Space>
          {!dialogConfig.isSingleButton && <CancelBtn />}
          <OkBtn />
        </Space>
      )}
    />
  );
};

export { CoreDialog };

const StyledDialog = styled(Modal)``;
