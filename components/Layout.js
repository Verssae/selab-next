/** @jsx jsx */
import { jsx, css, Global } from "@emotion/core"
import { Fragment } from "react"

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
        }
      `}
    />
    {children}
  </Fragment>
)

export default Layout