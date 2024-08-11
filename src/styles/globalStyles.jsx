import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --color-grey-0: #fff;
    --color-grey-50: #f9fafb;
    --color-grey-100: #f3f4f6;
    --color-grey-200: #e5e7eb;
    --color-grey-300: #d1d5db;
    --color-grey-400: #9ca3af;
    --color-grey-500: #6b7280;
    --color-grey-600: #4b5563;
    --color-grey-700: #374151;
    --color-grey-800: #1f2937;
    --color-grey-900: #111827;

    --color-green-100: #E7F2E8;
    --color-green-200: #CFE4D2;
    --color-green-300: #B8D7BB;
    --color-green-400: #A0C9A5;
    --color-green-500: #89BC8F;
    --color-green-600: #72AF78;
    --color-green-700: #5BAA60;
    --color-green-800: #448B4A;
    --color-green-900: #2D6C34;

    --color-dark-100: #E1E4E6;
    --color-dark-200: #C2C9CD;
    --color-dark-300: #A4AFB4;
    --color-dark-400: #85959A;
    --color-dark-500: #667B81;
    --color-dark-600: #486167;
    --color-dark-700: #2A474E;
    --color-dark-800: #0B2D35;
    --color-dark-900: #04171C;

    --color-white-100: #FFFFFF;
    --color-white-200: #FFFFFF;
    --color-white-300: #FFFFFF;
    --color-white-400: #FFFFFF;
    --color-white-500: #FFFFFF;
    --color-white-600: #E6E6E6;
    --color-white-700: #CCCCCC;
    --color-white-800: #B3B3B3;
    --color-white-900: #999999;

    --color-red-100: #FFE1E1;
    --color-red-200: #FFC3C3;
    --color-red-300: #FFA4A4;
    --color-red-400: #FF8686;
    --color-red-500: #FF6767;
    --color-red-600: #FF4949;
    --color-red-700: #FF2A2A;
    --color-red-800: #FF0C0C;
    --color-red-900: #E70000;

    --border-radius-tiny: 3px;
    --border-radius-sm: 5px;
    --border-radius-md: 7px;
    --border-radius-lg: 9px;
    --border-radius-xl: 50px;

    --backdrop-color: rgba(255, 255, 255, 0.1);
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
    --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

    --image-grayscale: 0;
    --image-opacity: 100%;

    --font-size-sm: 1rem;
    --font-size-md: 1.6rem;
    --font-size-lg: 2rem;
    --font-size-xl: 2.4rem;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    font-family: "Lato", sans-serif;
    color: var(--color-grey-700);
    transition: color 0.3s, background-color 0.3s;
    min-height: 100vh;
    line-height: 1.5;
    font-size: var(--font-size-medium);
  }

  input,
  textarea,
  button,
  select {
    font: inherit;
    color: inherit;
  }

  button {
    cursor: pointer;
  }

  *:disabled {
    cursor: not-allowed;
  }

  select:disabled,
  input:disabled {
    background-color: var(--color-grey-200);
    color: var(--color-grey-500);
  }

  input:focus,
  button:focus,
  textarea:focus,
  select:focus {
    outline: 2px solid var(--color-grey-600);
    outline-offset: -1px;
  }

  button:has(svg) {
    line-height: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
    hyphens: auto;
  }

  img {
    max-width: 100%;
  }
`;

export default GlobalStyles;
