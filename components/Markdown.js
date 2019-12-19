/**@jsx jsx */
import { jsx, css, Global } from "@emotion/core"
import ReactMarkdown from "react-markdown"
import CodeBlock from "./CodeBlock"
import Heading from "./Heading"

const Markdown = ({ value, isHeading }) => {
  const renderers = isHeading ? {
      code: CodeBlock,
      heading: Heading,
      image: Image,
  } : {
    code: CodeBlock,
  }
  return (
    <div css={styles}>
      <ReactMarkdown
        source={value}
        escapeHtml={false}
        renderers={renderers}
      />
    </div>
  )
}

const styles = {
  zIndex: "1",
  height: "1em",
  padding: "0",
  margin: "70px 0px 120px 0px",
  fontSize: "20px",
  // top: "0",
  width: "92%",
  // position: "relative",
  minHeight: "60vh",
  overflow: "scroll",
  padding: "3.5em 4% 4%",
  listStyle: "none",
  left: "0",
  ul: {
    listStyleType: "disc",
    marginLeft: "1.5em",
    marginRight: "0%",
    marginBottom: "0.75em",
    paddingLeft: "0.5em",
    margin: "0",
    lineHeight: "1.1em",
    marginBlockEnd: "1em",
    marginInlineStart: "0px",
    marginInlineEnd: "0px",
    paddingInlineStart: "40px",
    visibility: "visible",
    fontFamily: "Calibri, Helvetica, sans-serif"
  }
}

const Image = (props) => {
    console.log(props)
    return <img {...props} />
}

export default Markdown
