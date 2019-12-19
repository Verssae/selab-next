import styled from "@emotion/styled"
import theme from "../theme"
import ContentLoader from "react-content-loader"

import CreateButton from "../../public/icons/create-24px.svg"

export default styled(CreateButton)`
  width: 30px;
  fill: black;
  &:hover {
    fill: green;
  }
  cursor: pointer;
`