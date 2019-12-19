/** @jsx jsx */
import { jsx, css, Global } from "@emotion/core"
import { Fragment } from "react"
import theme from "./theme"

const Layout = ({ children, styles }) => (
  <div id="outer-container">
    <Global
      styles={css`
        html,
        body {
          margin: 0;
          padding: 0;
          font-family: Helvetica, Arial, sans-serif;
          font-size: 24pt;
          width: 100%;
          @media screen and (max-width: 480px) {
            font-size: 12px;
          }
          @media screen and (max-width: 1060px) {
            margin: auto;
            font-size: 16pt;
          }
          background-color: ${theme.COLORS.sapphire};
          ${styles}
        }
      `}
    />
    <div id="page-wrap">{children}</div>
  </div>
)

export default Layout
