/** @jsx jsx */
/*
TODO:
- [x] fix css styling style
- [ ] fill out content with selab main page
 */

import { useRef, forwardRef } from "react"
import { jsx, css } from "@emotion/core"
import Head from "next/head"
import { Slide, LightSpeed } from "react-reveal"
import styled from "@emotion/styled"
import Link from "next/link"

import theme from "../components/theme"
import CustomHeader from "../components/CustomHeader"
import Layout from "../components/Layout"
import { Container, pageStyle, Content } from "../components/pages/index"
import Research from "../components/Research"

const Index = () => {
  const headerStyleStart = {
    defaultBgColor: theme.COLORS.sapphire,
    defaultTextColor: "white",
    bgColor: theme.COLORS.vanila,
    textColor: "black"
  }

  const headerStyleEnd = {
    defaultBgColor: theme.COLORS.vanila,
    defaultTextColor: "black",
    bgColor: theme.COLORS.sapphire,
    textColor: "white"
  }

  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" })
  }

  const vanilaStart1 = useRef(null)
  const vanilaEnd1 = useRef(null)
  const vanilaStart2 = useRef(null)
  const vanilaEnd2 = useRef(null)

  const refs = [
    {
      ref: vanilaStart1,
      ...headerStyleStart
    },
    {
      ref: vanilaEnd1,
      ...headerStyleEnd
    },
    {
      ref: vanilaStart2,
      ...headerStyleStart
    },
    {
      ref: vanilaEnd2,
      ...headerStyleEnd
    }
  ]
  return (
    <Layout >
    
      <Head>
        <title>{"Software Engineering Lab - Home"}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>

      <Container id="page-wrap" bgColor={theme.COLORS.sapphire}>
        <CustomHeader refs={refs} />
          <div>
            <Page bgColor={theme.COLORS.sapphire} color={"white"}>
              <div>
                <Slide left>
                  <p>{`SELab:`}</p>
                  <h1>{`Software Engineering Lab`}</h1>
                  <p>{`Welcome to our homepage!`}</p>
                </Slide>
                <LightSpeed right>
                  <p onClick={() => scrollTo(vanilaStart1)}>{`⬇`}</p>
                </LightSpeed>
              </div>
            </Page>
            <Page ref={vanilaStart1} bgColor={theme.COLORS.vanila}>
              <div>
                {`[채울 내용 확정하기(notice shortcut, contact, ...)]`}
                {`slide test`}
                <Link href="/slides/0">
                  <a>Slide 0</a>
                </Link>
                <Link href="/slides/1">
                  <a>Slide 1</a>
                </Link>
              </div>
            </Page>
            <Research
              ref={vanilaEnd1}
              bgColor={theme.COLORS.sapphire}
              color={"white"}
            />

            <Page ref={vanilaStart2} bgColor={theme.COLORS.vanila}>
              {`[Prof & members shortcut page]`}
            </Page>
            <Page
              ref={vanilaEnd2}
              bgColor={theme.COLORS.sapphire}
              color={"white"}
            >
              {`[Courses page]`}
            </Page>
          </div>
          
        </Container>
    </Layout>
  )
}

const Page = forwardRef(({ bgColor, color, children }, ref) => (
  <div
    css={css`
      background-color: ${bgColor};
      color: ${color ? color : "black"};
    `}
  >
    <Content css={pageStyle} ref={ref}>
      {children}
    </Content>
  </div>
))


export default Index
