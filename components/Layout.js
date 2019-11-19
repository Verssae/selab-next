/** @jsx jsx */
import { jsx, css, Global } from "@emotion/core"
import { Fragment } from "react"
import theme from "./theme"
const Layout = ({ children }) => (
  <Fragment>
    <Global
      styles={css`
        html,
        body {
          margin: 0;
          padding: 0;
          font-family: Helvetica, Arial, sans-serif;
          font-size: 24px;
          background-color: ${theme.COLORS.sapphire};
        }
      `}
    />
    {children}
  </Fragment>
)

export default Layout