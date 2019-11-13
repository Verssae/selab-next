/** @jsx jsx */

import  Link  from "next/link"
import { css,jsx } from "@emotion/core"
import { titleStyle } from "./CSS/index"

const HomeLink = () => (
  <Link href="/" as="/">
    <p css={titleStyle}>
      lab[
      <span
        css={css`
          color: #eb731e;
        `}
      >
        se
      </span>
      ];
    </p>
  </Link>
)

export default HomeLink