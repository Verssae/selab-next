/**@jsx jsx */
import {css, jsx} from "@emotion/core"
import { createElement} from "react"

export const Heading = (props) => {
  const { level, children } = props
  return (
    <>
      {level == 1 ? (
        ''
      ) : (
        createElement(`h${level}`, props, children)
      )}
    </>
  )
}

export const MDHeading = (props) => {
  const {level, children} = props
  return (
    <>
    {createElement(`h${level}`, props, children)}
    {level == 1? <hr css={hrStyle}/> : ''}
    </>
  )
}

const hrStyle = css`
  border: none;
  border: 1px dotted;
`

