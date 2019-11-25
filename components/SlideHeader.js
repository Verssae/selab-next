import { useState } from "react"
import styled from "@emotion/styled"
import theme from "./theme"
import {Option} from "./Option"

const SlideHeader = ({ options, children, callback, page }) => {
    const [isOpen, setIsOpen] = useState(false)
    const onClickHandler = (id) => {
      callback(id)
    }
  
    return (
      <StyledHeader onClick={() => setIsOpen(!isOpen)}>
        <h1>{children}</h1>
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
      </StyledHeader>
    )
  }
  
  const StyledHeader = styled(`div`)`
    background-color: ${theme.COLORS.sapphire};
    color: white;
    margin: 0;
    min-height: 74px;
    padding: 5px;
    & h1 {
      margin: 0;
      margin-bottom: 10px;
    }
  `

export default SlideHeader



