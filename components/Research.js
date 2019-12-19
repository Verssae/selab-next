/** @jsx jsx */

import Link from "next/link"
import { css, jsx } from "@emotion/core"
import styled from "@emotion/styled"
import { forwardRef } from "react"
import theme from "./theme"
import { useState, useRef, useEffect } from "react"

//FIXME: very hard coded refactoring needed

// parent of research must be overflow:auto or scroll
const Research = forwardRef(({ bgColor, color }, ref) => {
  const imgRef = useRef()
  const infoRef = useRef()
  const [y, setY] = useState(0)
  const [isHighlight, setIsHighlight] = useState(0)
  const onPercentChange = () => {
    let scrollY = imgRef.current.getBoundingClientRect().y
    let { height } = infoRef.current.getBoundingClientRect()
    let scrollBarY = (-1 * scrollY * height) / 2000
    setIsHighlight(0)

    if (scrollBarY > height * 0.25) {
      setIsHighlight(1)
    }
    if (scrollBarY > height * 0.66) {
      setIsHighlight(2)
    }

    if (scrollY < 0 && scrollY > -1450) {
      setY((-1 * scrollY * height) / 2000)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", onPercentChange)
    return () => window.removeEventListener("scroll", onPercentChange)
  }, [])

  return (
    <Container ref={ref}>
      <h1>Introducing our research interests</h1>
      <Wrapper bgColor={bgColor} color={color}>
        <Sticky ref={infoRef}>
          <ScrollBar y={y} />
          <Info>
            <InfoUl isHighlight={isHighlight == 0}>
              <h2>{`Web & Web security`}</h2>
              <li>Semantic web</li>
              <li>Effective Access Control for Web Data</li>
              <li>Vulnerability Analysis and Detection for HTML5</li>
              <li>JavaScript and Hybrid Application</li>
            </InfoUl>
            <br />

            <InfoUl isHighlight={isHighlight == 1}>
              <h2>{`Formal Engineering Methods`}</h2>
              <li>Semantic web</li>
              <li>Effective Access Control for Web Data</li>
              <li>Vulnerability Analysis and Detection for HTML5</li>
              <li>JavaScript and Hybrid Application</li>
            </InfoUl>
            <br />
            <InfoUl isHighlight={isHighlight == 2}>
              <h2>{`Requirement Engineering`}</h2>
              <li>Semantic web</li>
              <li>Effective Access Control for Web Data</li>
              <li>Vulnerability Analysis and Detection for HTML5</li>
              <li>JavaScript and Hybrid Application</li>
            </InfoUl>
          </Info>
        </Sticky>

        <Right ref={imgRef}>
          <img src="research/web_securitymodified.png" alt="web_security" />
          <img src="research/formalmethod.png" alt="formalmethod" />
          <img src="research/RE.png" alt="RE" />
        </Right>
      </Wrapper>
      <div></div>
    </Container>
  )
})

const Right = styled.div`
  position: absolute;
  left: 50vw;
  /* width: 60%; */
  height: 2000px;
  top: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  & img {
    width: 400px;
    /* margin-bottom: 20vh; */
  }

  @media screen and (max-width: 850px) {
    & img {
    display: none;
    /* margin-bottom: 20vh; */
  }
  }
  /* padding-top: 3vh; */
`

const Info = styled.div`
  & ul {
    list-style-type: none;
    padding: 10px;
  }

  li {
    padding-top: 5px;
    font-size: 16px;
  }
`

const InfoUl = styled.ul`
  list-style-type: none;
  padding: 10px;
  opacity: ${(props) => (props.isHighlight ? 1 : 0.5)};
`

const Sticky = styled.div`
  text-align: left;
  padding-left: 10vw;
  @supports (position: sticky) or (position: -webkit-sticky) {
    & {
      position: -webkit-sticky; /* 사파리 브라우저 지원 */
      position: sticky;
      top: 100px;
      width: 50%;
      display: flex;
      flex-direction: row;
      margin-bottom: 200px;
    }
  }

  /* @media screen and (max-width: 780px) {
    width: 100%;
    margin: auto;
  } */

  & h2 {
    margin-top: 0;
    font-size: 25px;
  }
`

const Wrapper = styled.div`
  position: relative;
  height: 2500px;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => (props.color ? props.color : "black")};
  padding-top: 3vh;
  width: 100%;
  @media screen and (min-width: 1440px) {
    width: 1440px;
    margin: auto;
  }
  
`
const Container = styled.div`
  /* padding-left: 6vw;
  padding-top: 7vh; */
  width: 100%;
  text-align: center;
  & h1 {
    color: ${theme.COLORS.vanila};
  }

`

const ScrollBar = styled.div`
  width: 2px;
  height: 165px;
  background-color: ${theme.COLORS.vanila};
  margin-right: 2vw;
  transform: translateY(${(props) => props.y}px);
`

export default Research
