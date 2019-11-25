import Header from "../components/SlideHeader"
import Footer from "../components/Footer"
import { useState, useEffect } from "react"
/**
 * FIXME: Delete this file someday
 */
const titleH1 = {
  position: "static",
  margin: "1em 0 0",
  padding: "0",
  fontSize: "2em",
  whiteSpace: "normal",
  color: "#000",
  background: "transparent",
  clear: "right",
  textAlign: "center"
}
const smallerFont = {
  fontSize: "smaller",
  fontWeight: "normal"
}
const titleH2 = {
  fontStyle: "italic",
  fontSize: "1em",
  margin: "0.25em",
  textAlign: "center",
  padding: "0",
  fontWeight: "normal",
  display: "block",
  marginBlockStart: "0.83em",
  marginBlockEnd: "0.83em",
  marginInlineStart: "0px",
  marginInlineEnd: "0px"
}
const license = {
  textAlign: "center",
  fontSize: "smaller",
  marginBottom: "0.5em",
  marginTop: "3em",
  display: "block",
  marginBlockStart: "1em",
  marginBlockEnd: "1em",
  marginInlineStart: "0px",
  marginInlineEnd: "0px"
}
const w3c = {
  textAlign: "right",
  display: "block"
}
const content = {
  zIndex: "1",
  height: "1em",
  padding: "0",
  margin: "0",
  fontSize: "22px",
  top: "0",
  width: "92%",
  padding: "3.5em 4% 4%",
  listStyle: "none",
  left: "0"
}
const topContent = {
  position: "absolute",
  top: "0.3em",
  left: "2%",
  zIndex: "1",
  margin: "0",
  padding: "0.3em 0 0 50px",
  fontSize: "150%",
  whiteSpace: "nowrap",
  lineHeight: "1em",
  color: "#DDE",
  fontFamily: '"Franklin Gothic Demi", Verdana, Helvetica, sans-serif',
  fontWeight: "normal"
}
const ul = {
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
const li = {
  marginTop: "0.5em",
  marginRight: "0"
}
const ol = {
  marginLeft: "0.5em",
  marginRight: "0%",
  marginBottom: "0.75em",
  paddingLeft: "0.5em",
  display: "block",
  listStyleType: "decimal",
  marginBlockStart: "1em",
  marginBlockEnd: "1em",
  marginInlineStart: "0px",
  marginInlineEnd: "0px",
  paddingInlineStart: "40px"
}
const leftFloatingImage = {
  float: "left",
  paddingRight: "50px"
}
const p = {
  marginTop: "0.2em",
  marginBottom: "0.5em",
  display: "block",
  marginBlockStart: "1em",
  marginBlockEnd: "1em",
  marginInlineStart: "0px",
  marginInlineEnd: "0px"
}
const bodyContent = {
  margin: "0",
  padding: "0"
}

const Index = () => {
  const [current, setCurrent] = useState(0)

  function handlerCurrentNext() {
    if (current < slide_list.length - 1) {
      setCurrent(parseInt(current) + 1)
    }
  }
  function handlerCurrentPrev() {
    if (current > 0) {
      setCurrent(parseInt(current) - 1)
    }
  }

  const slide0 = (
    <div style={content}>
      <h1 style={titleH1}>
        <span style={smallerFont} class="smallerFont">
          CSE326: Web Application Development
        </span>{" "}
        <br />{" "}
        <strong>
          Lab 0: Introduction <br /> (Git &amp; MAMP)
        </strong>
      </h1>
      <br />
      <h2 style={titleH2}>Scott Uk-Jin Lee</h2>
      <p style={license}>
        Except where otherwise noted, the contents of this document are
        Copyright 2019 Scott Uk-Jin Lee and Ahn YounGeun. All rights reserved.
        <br />
        Any redistribution, reproduction, transmission, or storage of part or
        all of the contents in any form is prohibited without the author's
        expressed written permission.
      </p>
      <div style={w3c}>
        <a href="https://validator.w3.org/check/referer">
          <img src="images/w3c-html.png" alt="Valid HTML5" />
        </a>
        <a href="https://jigsaw.w3.org/css-validator/check/referer">
          <img src="images/w3c-css.png" alt="Valid CSS" />
        </a>
      </div>
    </div>
  )

  const slide1 = (
    <div style={content}>
      <h1 style={topContent}>Basic lab instructions</h1>
      <ul style={ul}>
        <li style={li}>
          You are advised to look up syntax and examples from the{" "}
          <strong>lecture slides</strong>.
        </li>
        <li style={li}>
          Ask <strong>TA</strong> or your <strong>classmates</strong> for help,
          if needed.
        </li>
        <li style={li}>
          Talk to your <strong>classmates</strong> to share ideas; but do not
          copy or share code.
        </li>
        <li style={li}>
          Complete all of the exercises in reasonable time (maximum 2 hours).
        </li>
        <li style={li}>
          Your solution for a lab can be <strong>checked</strong> with TA in
          that lab session <strong>only</strong>.
        </li>
      </ul>
    </div>
  )

  const slide2 = (
    <div style={content}>
      <h1 style={topContent}>What is VCS (Version Control System)?</h1>

      <ul style={ul}>
        <li style={li}>
          Database for{" "}
          <em>
            <q>Version</q>
          </em>
        </li>
        <li style={li}>
          A system for managing multiple revisions of the same unit of
          information
        </li>
        <li style={li}>Git, SVN, Mercurial, ...</li>
        <li style={li}>
          Why use VCS?
          <ul style={ul}>
            <li style={li}>to collaborate with team</li>
            <li style={li}>to backup the version of project</li>
            <li style={li}>to track changes in source code</li>
            <li style={li}>
              to reduce side-effects when developing a new module
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )

  const slide3 = (
    <div style={content}>
      <h1 style={topContent}>Git</h1>

      <p style={p}>
        <img alt="git logo" src="./images/0/Git-Logo-2Color.png" />
      </p>
      <ul style={ul}>
        <li style={li}>the most commonly used VCS</li>
        <li style={li}>
          Git Tutorial:{" "}
          <a href="https://rogerdudler.github.io/git-guide/index.ko.html">
            https://rogerdudler.github.io/git-guide/index.ko.html
          </a>{" "}
          (in Korean)
        </li>
        <li style={li}>
          Download: <a href="https://git-scm.com/">https://git-scm.com/</a>
        </li>
      </ul>
    </div>
  )


  var slide_list = [
    slide0,
    slide1,
    slide2,
    slide3,
  ]

  return (
    <div style={bodyContent}>
      <Header
        setCurrent={setCurrent}
        handlerCurrentPrev={handlerCurrentPrev}
        handlerCurrentNext={handlerCurrentNext}
      />
      {slide_list[current]}
      <Footer
        current={current}
        max={slide_list.length}
        handlerCurrentPrev={handlerCurrentPrev}
        handlerCurrentNext={handlerCurrentNext}
      />
    </div>
  )
}

export default Index
