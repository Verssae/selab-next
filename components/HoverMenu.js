/**@jsx jsx */
import { css, jsx } from "@emotion/core"
import styled from "@emotion/styled"
import { useState, useEffect } from "react"
import { StyleLink } from "./Links"
import theme from "./theme"

const HoverMenu = ({ title, children, isBurger = false }) => {
  const [hover, setHover] = useState(false)
  console.log(children)
  return (
    <div
      css={container}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <StyleLink
        css={css`
          ${hover ? "opacity: 0.7;" : ""}
        `}
      >
        {title}
      </StyleLink>
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
  font-size: 15px;
  padding: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  margin: 0;
`

const Items  = styled.div`
    ${burgerItems}
    ${props => props.isBurger ? "width:100%;" : "position: absolute; top: 20px;"}
`
export default HoverMenu
