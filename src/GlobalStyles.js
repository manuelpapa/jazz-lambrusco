import React from "react";
import { Global, css } from "@emotion/core";

function GlobalStyles() {
  return (
    <Global
      styles={css`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          overflow: inherit;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;

          background: var(--bg-gradient-light);
          background-position: bottom center;
          background-repeat: no-repeat;
          background-size: cover;
          background-attachment: fixed;
        }
        :root {
          --bg-gradient: linear-gradient(
            to top,
            #dad4ec 0%,
            #dad4ec 1%,
            #f3e7e9 100%
          );
          --bg-gradient-light: linear-gradient(
            33deg,
            #f1edfa 0%,
            #dad4ec 1%,
            #f3e7e9 100%
          );

          background-blend-mode: multiply;
          background-blend-mode: screen;
          --font-gradient: linear-gradient(33deg, #ff0844 0%, #ffb199 100%);
          --bg-color: #fff;
        }
        h1 {
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          background-image: var(--font-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-size: 2.2em;
          margin-block-start: 0em;
        }

        h2 {
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          background-image: var(--font-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-size: 2em;
          margin-block-start: 0em;
        }

        small {
          font-size: 0.9em;
          color: #868686;
        }

        a {
          text-decoration: none;
          font-size: 0.9em;
          color: #ffffff;
        }
      `}
    />
  );
}

export default GlobalStyles;
