import React, { ReactElement } from "react";
import { CoreDialog } from "../core/CoreDialog";

interface WithFloatingProps {
  children: ReactElement;
}

const WithFloating = ({ children }: WithFloatingProps) => {
  return (
    <>
      {children}
      <CoreDialog />
    </>
  );
};

export { WithFloating };
