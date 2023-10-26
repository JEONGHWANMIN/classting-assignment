import { typographyType, colorsType } from "@src/styles/styledTheme";

declare module "styled-components" {
  export interface DefaultTheme {
    typography: typographyType;
    colors: colorsType;
  }
}
