import { typographyType, colorsType } from "@src/styles/theme";

declare module "styled-components" {
  export interface DefaultTheme {
    typography: typographyType;
    colors: colorsType;
  }
}
