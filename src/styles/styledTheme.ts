import { DefaultTheme } from "styled-components";

const colors = {
  gray: {
    100: "#F5F5F5",
    200: "#EEEEEE",
    300: "#E0E0E0",
    400: "#BDBDBD",
    500: "#9E9E9E",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
  },
  error: {
    100: "#FFCDD2",
    200: "#EF9A9A",
    300: "#E57373",
    400: "#EF5350",
    500: "#F44336",
    600: "#E53935",
    700: "#D32F2F",
    800: "#C62828",
    900: "#B71C1C",
  },
  warning: {
    100: "#FFEDCC",
    200: "#FFDB99",
    300: "#FFC966",
    400: "#FFB533",
    500: "#FFA000",
    600: "#CC8500",
    700: "#996B00",
    800: "#664000",
    900: "#332600",
  },
  mainGreen: {
    100: "#99e6b4",
    200: "#69d392",
    300: "#49bc78",
  },
} as const;

const typography = {
  fontSize: {
    h1: "3.6rem",
    h2: "3.2rem",
    h3: "2.8rem",
    h4: "2.4rem",
    body1: "2.0rem",
    body2: "1.9rem",
    body3: "1.8rem",
    body4: "1.7rem",
    body5: "1.6rem",
    body6: "1.5rem",
  },
  fontWeight: {
    fontWeightBold: 700,
    fontWeightSemiBold: 600,
    fontWeightMedium: 500,
    fontWeightRegular: 400,
  },
  fontFamily: {
    pretendard: {
      semiBold: "Pretendard-SemiBold",
      medium: "Pretendard-Medium",
      regular: "Pretendard-Regular",
    },
  },
} as const;

export type colorsType = typeof colors;
export type typographyType = typeof typography;

export const styledTheme: DefaultTheme = {
  typography,
  colors,
};
