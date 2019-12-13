/** @jsx jsx */
import { jsx, css, Global } from "@emotion/core"
import { Fragment } from "react"
import theme from "./theme"
const Layout = ({ children }) => (
  <Fragment  id="outer-container">
    <Global
      styles={css`
        html,
        body {
          margin: 0;
          padding: 0;
          font-family: Helvetica, Arial, sans-serif;
          font-size: 24px;
          width: 100%;
          @media screen and (max-width: 480px) {
            font-size: 12px;
          }
          background-color: ${theme.COLORS.sapphire};
        }
      `}
    />
    {children}
  </Fragment>
)

export default Layout
