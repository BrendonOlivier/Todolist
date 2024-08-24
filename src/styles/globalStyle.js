import { createGlobalStyle } from 'styled-components';

const globalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        text-decoration: none;
        font-family: "Montserrat", sans-serif;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        overflow-x: hidden;
        width: 100vw;
        height: 100%;
        background-color: #222222;
    }
`;

export default globalStyles;