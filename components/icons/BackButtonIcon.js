import styled from "@emotion/styled"
import theme from "../theme"
import ContentLoader from "react-content-loader"

import BackButton from "../../public/icons/keyboard_backspace-24px.svg"

export default styled(BackButton)`
  width: 40px;
  fill: gray;
  &:hover {
    fill: black;
  }
  cursor: pointer;
`