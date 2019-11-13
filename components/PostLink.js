/**@jsx jsx */
import  Link  from "next/link"
import { css,jsx } from "@emotion/core"
import { linkStyle } from "./CSS/index"

const PostLink = (props) => (
  <Link href="/slides/[id]" as={`/slides/${props.id}`}>
    <p css={linkStyle}>{props.id}</p>
  </Link>
)

export default PostLink