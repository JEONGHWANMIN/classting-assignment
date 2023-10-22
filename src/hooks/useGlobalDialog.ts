import { useSetRecoilState } from "recoil";
import { globalDialogConfig } from "@src/state/dialog.recoil";
import { CoreDialogProps } from "@src/components/core/CoreDialog";

const useGlobalDialog = () => {
  const setDialogConfig = useSetRecoilState(globalDialogConfig);

  const setGlobalDialogConfig = (config: CoreDialogProps) => {
    setDialogConfig({
      open: true,
      ...config,
    });
  };

  const showConfirmDialog = (title: string) => {
    setGlobalDialogConfig({
      isSingleButton: true,
      okText: "확인",
      title,
    });
  };

  return { setGlobalDialogConfig, showConfirmDialog };
};

export { useGlobalDialog };
