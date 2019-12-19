/**j@jsx jsx */
import { css, jsx } from "@emotion/core"
import { useState } from "react"
import styled from "@emotion/styled"
import theme from "./theme"
import { Option } from "./Option"

export const SlideHeader = ({ options, children, callback, page }) => {
  const [isOpen, setIsOpen] = useState(false)
  const onClickHandler = (id) => {
    callback(id)
  }

  return (
    <StyledHeader onClick={() => setIsOpen(!isOpen)}>
      <h1>{children}</h1>
      <div css={contentStyle}>
        {isOpen
          ? options.map((label, id) => (
              <Option
                key={id}
                id={id}
                label={label}
                onClick={onClickHandler}
                selected={id === page}
              />
            ))
          : ""}
      </div>
    </StyledHeader>
  )
}

export const StyledHeader = styled(`div`)`
font-size: 20px;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${theme.COLORS.sapphire};
  color: white;
  margin: 0;
  min-height: 70px;
  // padding: 5px;
  & h1 {
    margin: 10px 60px;
  }
`

const contentStyle = css`
  /* margin-bottom: 20px; */
  padding: 0px;
`

// export default SlideHeader
