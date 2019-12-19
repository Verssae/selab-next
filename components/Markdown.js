/**@jsx jsx */
import { jsx, css, Global } from "@emotion/core"
import ReactMarkdown from "react-markdown"
import CodeBlock from "./CodeBlock"
import {Heading, MDHeading} from "./Heading"

const Markdown = ({ value, ppt }) => {
  const renderers = ppt
    ? {
        code: CodeBlock,
        heading: Heading,
        image: Image,
        
      }
    : {
        code: CodeBlock,
        heading: MDHeading,
        thematicBreak: Horizontal
      }
  return (
    <div css={ppt ? pptStyle : mdStyle}>
      <ReactMarkdown source={value} escapeHtml={false} renderers={renderers} />
    </div>
  )
}

const commonStyle = css`
  width: 92%;
  min-height: 60vh;
  font-size: 16pt;
  list-style-type: none;
  & ul {
    list-style-type: disc;
  }
`

const pptStyle = css`
  ${commonStyle}
  margin: 70px 20px 120px 20px;
  overflow: scroll;

`

const mdStyle = css`
  ${commonStyle}
  margin: auto;
  margin-top: 100px;
  font-size: 12pt;
  & h1 {
    margin: 5px;
  }
`

const Image = (props) => {
  console.log(props)
  return <img {...props} />
}

const Horizontal = (props) => {
  return <hr css={css`
  border: none;
  border: 2px solid;
  margin-top: 50px;
  `} {...props}/>
}

export default Markdown
