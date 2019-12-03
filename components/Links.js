/** @jsx jsx */

import Link from "next/link"
import { css, jsx } from "@emotion/core"
import styled from "@emotion/styled"
import theme from "./theme"

const linkStyle = css`
  font-size: 20px;
  margin-left: 1vw;
  margin-right: 1vw;
  font-weight: bold;

  &:hover {
    color: ${theme.COLORS.vanila};
  }
`

const titleStyle = css`
  ${linkStyle}
  font-size: 40px;
  font-weight: bold;
`

export const HomeLink = () => (
  <Link href="/" as="/">
    <a css={titleStyle}>
      lab[
      <span
        css={css`
          color: #eb731e;
        `}
      >
        se
      </span>
      ];
    </a>
  </Link>
)

export const PostLink = (props) => (
  <Link href="/example" as={`/example/${props.id}`}>
    <a css={linkStyle}>{props.id}</a>
  </Link>
)

export const StyleLink = styled.a`
  ${linkStyle};
`
