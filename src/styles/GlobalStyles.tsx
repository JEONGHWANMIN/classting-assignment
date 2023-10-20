import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}

    @font-face {
    font-family: 'Pretendard-SemiBold';
    src: url('../../public/fonts/Pretendard-SemiBold.subset.woff2') format('woff');
    font-weight: 600;
    font-display: swap;
    }

    @font-face {
    font-family: 'Pretendard-Medium';
    src: url('../../public/fonts/Pretendard-Medium.subset.woff2') format('woff');
    font-weight: 500;
    font-display: swap;
    }

    @font-face {
    font-family: 'Pretendard-Regular';
    src: url('../../public/fonts/Pretendard-Regular.subset.woff2') format('woff');
    font-weight: 400;
    font-display: swap;
    }

    *{
        box-sizing: border-box;
        font-size: 62.5;
    }

    html { 
        font-size: 62.5%;
     }

     body {
        font-family: "Pretendard-Regular";
     }

    a {
        text-decoration: none;
        color: inherit;
    }
    
`;

export default GlobalStyles;
