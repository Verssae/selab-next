/** @jsx jsx */
import { jsx, css, Global } from "@emotion/core"
import { Fragment } from "react"
import theme from "./theme"

import Sidebar from "./Sidebar"

const sidebarstyle ={
    position: "fixed",
    textAlign: "center",
    fontSize: "0.7em",
    //color: "#AAAABB",
    width: "200px",
    height : "1000px",
    right : "0px",
    rop: "0px",
    zIndex: "25"
}

const Layout = ({ children, names, links }) => (
  <Fragment>
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
    <Sidebar names={names} links={links}></Sidebar>
  </Fragment>
)

export default Layout
