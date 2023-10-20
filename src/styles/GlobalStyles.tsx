import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}

    *{
        box-sizing: border-box;
        font-size: 62.5;
        
    }

    html { font-size: 62.5%; }

    a {
        text-decoration: none;
        color: inherit;
    }
    
`;

export default GlobalStyles;
