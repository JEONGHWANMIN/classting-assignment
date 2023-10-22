import { atom } from "recoil";
import { CoreDialogProps } from "@src/components/core/CoreDialog";

export const globalDialogConfig = atom<CoreDialogProps>({
  key: "globalDialogConfig",
  default: {
    open: false,
    isSingleButton: false,
  },
});
