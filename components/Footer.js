/**@jsx jsx */
import { jsx, css, Global } from "@emotion/core"
import { useState } from "react"
import styled from "@emotion/styled"
import theme from "./theme"
import { OptionLink } from "./Option"

const bottom = {
  position: "fixed",
  backgroundColor: "#162E7C",
  top: "auto",
  bottom: "0",
  display: "block",
  width: "100%",
  zIndex: "5",
  left: "0",
  Height: "1.65em",
  paddingBottom: "2em",
  paddingTop: "0.5em",
  paddingLeft: "1em"
}

const Button = {
  float: "right",
  marginTop: "15px",
  marginRight: "30px"
}
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
const navaLink = {
  textAlign: "right"
}
const navaLinks = {
  color: "#779",
  border: "none",
  fontSize: "1.3em",
  backgroundColor: "#162E7C",
  margin: "0 0.4em",
  padding: "0",
  borderBottom: "2px solid"
}

import Link from "next/link"

const Footer = ({ chapters, children, goPrev, goNext, chapter, max, page }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div style={bottom}>
      <div style={Button} className="controls">
        <div style={navaLink}>
          <Link href={`/oneSlide/${chapter}`}>
            <button style={navaLinks}>HTML</button>
          </Link>
          <button style={navaLinks} onClick={goPrev}>
            «
          </button>
          <button style={navaLinks} onClick={goNext}>
            »
          </button>
        </div>
      </div>
      {page != 0 ? (
        <div style={currentSlide}>
          {page}/{max - 1}
        </div>
      ) : (
        false
      )}
      <Popup onClick={() => setIsOpen(!isOpen)}>
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
      </Popup>

      <div css={bottomContent} onClick={() => setIsOpen(!isOpen)}>
        {children}
      </div>
    </div>
  )
}

const Popup = styled(`div`)({
  borderColor: theme.COLORS.sapphire,
  borderWidth: "3px",
  borderStyle: "solid",
  position: "fixed",
  bottom: "90px",
  padding: 5,
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
