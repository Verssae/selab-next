/**@jsx jsx */
import { jsx, css, Global } from "@emotion/core"
import { useState } from "react"
import styled from "@emotion/styled"
import theme from "./theme"
import { OptionLink } from "./Option"

const currentSlide = {
  position: "fixed",
  textAlign: "center",
  fontSize: "0.7em",
  color: "#AAAABB",
  width: "10%",
  left: "45%",
  bottom: "1em",
  zIndex: "10"
}

import Link from "next/link"

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  color: #aab;
  background: ${theme.COLORS.sapphire};
  & h1 {
    margin: 5px;
    font-size: 16pt;
  }
  & h2 {
    margin: 5px;
    font-size: 14pt;
  }
`
const buttonStyle = css`
  position: fixed;
  bottom: 0;
  color: #aab;
  border: none;
  background: transparent;
  font-size: 20pt;
  margin: 10px 0px;
`
const Prev = styled.button`
${buttonStyle}
  left: 45%;
`
const Center = styled.button`
${buttonStyle}
  left: 48%;
`
const Next = styled.button`
${buttonStyle}
  right: 45%;
`

const PrintPage = styled.button`
  ${buttonStyle}
  right: 20px;
`


const Footer = ({ chapters, children, goPrev, goNext, chapter, max, page }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Container>
      
        <Prev onClick={goPrev}>«</Prev>
        {page > 0 ? (
          <Center>
            {page}/{max - 1}
          </Center>
        ) : (
         ""
        )}
        <Next onClick={goNext}>»</Next>
     
      <Link href={`/oneSlides/${chapter}`}>
          <PrintPage>Print</PrintPage>
        </Link>

      {/* <Popup onClick={() => setIsOpen(!isOpen)}>
        {isOpen
          ? chapters &&
            chapters.map((label, id) => (
              <OptionLink
                key={id}
                id={id}
                label={label}
                selected={id === chapter}
              />
            ))
          : ""}
      </Popup> */}

      {/* <div css={bottomContent} onClick={() => setIsOpen(!isOpen)}>
        {children}
      </div> */}
      {children}
    </Container>
  )
}

const Popup = styled(`div`)({
  borderColor: theme.COLORS.sapphire,
  borderWidth: "3px",
  borderStyle: "solid",
  position: "fixed",
  bottom: "90px",
  padding: 5
})

const bottomContent = {
  "h1, h2": {
    padding: "0",
    margin: "0",
    fontSize: "100%",
    color: "#AAB",
    fontWeight: "bold"
  }
}

export default Footer
