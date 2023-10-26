import React, { ReactElement } from "react";
import { useRecoilValue } from "recoil";
import { globalDialogConfig } from "@src/state/dialog.recoil";
import { CoreDialog } from "../core/CoreDialog";

interface WithFloatingProps {
  children: ReactElement;
}

const WithFloating = ({ children }: WithFloatingProps) => {
  const dialogConfig = useRecoilValue(globalDialogConfig);
  return (
    <>
      {children}
      <CoreDialog {...dialogConfig} />
    </>
  );
};

export { WithFloating };
