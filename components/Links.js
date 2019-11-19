/** @jsx jsx */

import  Link  from "next/link"
import { css,jsx } from "@emotion/core"
import { linkStyle, titleStyle } from "./CSS/Links"

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
  <Link href="/slides/[id]" as={`/slides/${props.id}`}>
    <a css={linkStyle}>{props.id}</a>
  </Link>
)

