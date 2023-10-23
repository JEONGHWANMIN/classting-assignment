import { ThemeConfig } from "antd";
import { styledTheme } from "./styledTheme";

export const antTheme: ThemeConfig = {
  token: {
    colorPrimary: styledTheme.colors.mainGreen[200],
    colorError: styledTheme.colors.error[500],
  },
};
