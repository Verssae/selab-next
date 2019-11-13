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

import theme from "../components/theme"
import Header from "../components/Header"
import Layout from "../components/Layout"
import PostLink from "../components/PostLink"
import HomeLink from "../components/HomeLink"
import {
  Container,
  pageStyle,
  Content,
  headerContentStyle
} from "../components/CSS/index"

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
    <Layout>
      <Head>
        <title>{"Software Engineering Lab - Home"}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <Container>
        <Header refs={refs}>
          <div css={headerContentStyle}>
            <HomeLink />
            <PostLink id="Courses" />
            <PostLink id="Publications" />
          </div>
        </Header>
        <div>
          <Page bgColor={theme.COLORS.sapphire} color={"white"}>
            <div>
              <Slide left>
                <p>{`SELab:`}</p>
                <h1>{`Software Engineering Lab`}</h1>
                <p>{`Hello, This is first Page`}</p>
              </Slide>
              <LightSpeed right>
                <p onClick={() => scrollTo(vanilaStart1)}>{`To next page`}</p>
              </LightSpeed>
            </div>
          </Page>
          <Page ref={vanilaStart1} bgColor={theme.COLORS.vanila}>
            {`Hello, This is second Page`}
          </Page>
          <Page
            ref={vanilaEnd1}
            bgColor={theme.COLORS.sapphire}
            color={"white"}
          >
            {`Hello, This is third Page`}
          </Page>
          <Page ref={vanilaStart2} bgColor={theme.COLORS.vanila}>
            {`Hello, This is fourth Page`}
          </Page>
          <Page
            ref={vanilaEnd2}
            bgColor={theme.COLORS.sapphire}
            color={"white"}
          >
            {`Hello, This is fifth Page`}
          </Page>
        </div>
      </Container>
    </Layout>
  )
}

const Page = forwardRef(({ bgColor, color, children }, ref) => (
  <div
    ref={ref}
    css={css`
      ${pageStyle};
      background-color: ${bgColor};
      color: ${color ? color : "black"};
    `}
  >
    <Content>{children}</Content>
  </div>
))

export default Index
