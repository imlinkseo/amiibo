import { css } from "@emotion/react";

export const globalStyles = css`
  body,
  html {
    font-family: "Pretendard", sans-serif;
    -ms-overflow-style: none;
  }

  * {
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  button {
    cursor: pointer;
    padding: 0;
    border: none;
    background-color: transparent;
  }

  textarea {
    resize: none;
  }

  a {
    text-decoration: none;
  }
`;
