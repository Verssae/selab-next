/** @jsx jsx */

import { Fragment, useRef, forwardRef } from "react"
import Link from "next/link"
import { jsx, css, Global } from "@emotion/core"
import Head from "next/head"

import Header from "../components/Header"
import theme from "../components/theme"
import {
  Container,
  linkStyle,
  pageStyle,
  titleStyle,
  Content
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
    <Fragment>
      <Global
        styles={css`
          html,
          body {
            margin: 0;
            padding: 0;
            font-family: Helvetica, Arial, sans-serif;
            font-size: 24px;
          }
        `}
      />
      <Head>
        <title>{"Software Engineering Lab - Home"}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <Container>
        <Header refs={refs}>
          <p css={titleStyle}>
            lab[
            <span
              css={css`
                color: #eb731e;
              `}
            >
              se
            </span>
            ]
          </p>
          <PostLink id="Courses" />
          <PostLink id="Publications" />
        </Header>
        <div>
          <Page bgColor={theme.COLORS.sapphire} color={"white"}>
            <div>
              <p>{`SELab:`}</p>
              <h1>{`Software Engineering Lab`}</h1>
              <p>{`Hello, This is first Page`}</p>
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
    </Fragment>
  )
}

const PostLink = (props) => (
  <Link href="/slides/[id]" as={`/slides/${props.id}`}>
    <p css={linkStyle} className="link">
      {props.id}
    </p>
  </Link>
)

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
