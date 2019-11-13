/** @jsx jsx */
/*
TODO:
- [ ] choose slide library or not
- [ ] make slide layout associative with header
*/

//FIXME:  this is temp component for slide

import { Fragment, useRef, forwardRef } from "react"
import { useRouter } from "next/router"
import { jsx, css, Global } from "@emotion/core"
import Head from "next/head"

import Header from "../../components/Header"
import theme from "../../components/theme"
import HomeLink from "../../components/HomeLink"
import PostLink from "../../components/PostLink"
import {
  Container,
  pageStyle,
  Content,
  headerContentStyle
} from "../../components/CSS/index"

const Presentation = () => {
  const router = useRouter()
  const headerStyle = {
    defaultBgColor: theme.COLORS.sapphire,
    defaultTextColor: "white",
    bgColor: theme.COLORS.sapphire,
    textColor: "white"
  }

  const slideContent = useRef(null)

  const refs = [
    {
      ref: slideContent,
      ...headerStyle
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
        <title>{`Software Engineering Lab - Slide ${router.query.id}`}</title>
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
          <Page
            ref={slideContent}
            bgColor={theme.COLORS.sapphire}
            color={"white"}
          ></Page>
        </div>
      </Container>
    </Fragment>
  )
}

const Page = forwardRef(({ bgColor, color, children }, ref) => (
  <div
    ref={ref}
    css={css`
      ${pageStyle};
      height: 90vh;
      background-color: ${bgColor};
      color: ${color ? color : "black"};
    `}
  >
    <Content>{children}</Content>
  </div>
))

export default Presentation
