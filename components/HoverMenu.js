/**@jsx jsx */
import { css, jsx } from "@emotion/core"
import styled from "@emotion/styled"
import { useState, useEffect } from "react"
import { linkStyle } from "./Links"
import theme from "./theme"

const HoverMenu = ({ title, children, isBurger = false }) => {
  const [hover, setHover] = useState(false)
  return (
    <div
      css={container}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <a
        css={css`
          ${hover ? "opacity: 0.7;" : ""}
          ${linkStyle}
          ${
            isBurger
              ? ""
              : `@media screen and (max-width: 1060px) {
    display: none;
  }`
          }
        `}
      >
        {title}
      </a>
      {hover ? <Items isBurger={isBurger}>{children}</Items> : ""}
    </div>
  )
}

const container = css`
  position: relative;
`

const burgerItems = css`
  width: 100vw;
  /* word-break: keep-all;
  word-wrap: normal; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  margin: 0;
  & a {
    font-size: 15pt;
  }
`

const Items = styled.div`
  ${burgerItems}
  ${(props) =>
    props.isBurger ? "width:100%;" : "position: absolute; top: 30px;"}
`
export default HoverMenu
