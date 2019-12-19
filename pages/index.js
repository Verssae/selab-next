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
import {
  Container,
  pageStyle,
  Content,
  Contact,
  CourseView,
  Second
} from "../components/pages/index"
import Research from "../components/Research"

import withApollo from "../lib/apollo"
import CourseTable from "../components/CourseTable"
import { Title } from "../components/pages/courses"

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
          <Page
            styles={css`
              height: 50vh;
            `}
            ref={vanilaStart1}
            bgColor={theme.COLORS.vanila}
          >
            <Second>
              <div>
                <Link href="/notices">
                  <h2>Notices</h2>
                </Link>

                <ul>
                  <li>{`연구원 모집`}</li>
                  <li>{`Welcome to SELab Homepage!`}</li>
                </ul>
              </div>
              <div>
                <Link href="/courses">
                  <h2>COURSES</h2>
                </Link>

                <ul>
                  <li>
                    <Link href="/incourse">
                      <a css={anchorStyle}>
                        {" "}
                        CSE326 Web Application Development
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/course">
                      <a css={anchorStyle}>
                        CSE6050 Advanced Software Engineering
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </Second>
          </Page>
          <Research
            ref={vanilaEnd1}
            bgColor={theme.COLORS.sapphire}
            color={"white"}
          />

          <Page ref={vanilaStart2} bgColor={theme.COLORS.vanila}>
            <Contact>
              <h1>Contact</h1>
              <div>
                <img src="contact_map.png" alt="map_screenshot" />
                <ul>
                  <li>
                    <p>Engineering Building #3, Room 421</p>
                    <p>HANYANG UNIVERSITY ERICA CAMPUS</p>
                    <p>
                      55, Hanyangdaehak-ro, Sangnok-gu, Ansan-si, Gyeonggi-do
                    </p>
                  </li>
                  <li>경기도 안산시 상록구 한양대학로 55 제3공학관 421</li>
                  <li>+82-31-400-4754</li>
                </ul>
              </div>
            </Contact>
          </Page>
          <Page
            ref={vanilaEnd2}
            bgColor={theme.COLORS.sapphire}
            color={"white"}
          >
            <CourseView>
              <Title>COURSES</Title>
              <div>
                <CourseTable degree="Undergraduate" />
                <CourseTable degree="Postgraduate" />
              </div>
            </CourseView>
          </Page>
        </div>
      </Container>
    </Layout>
  )
}

const Page = forwardRef(({ bgColor, color, children, styles }, ref) => (
  <div
    css={css`
      background-color: ${bgColor};
      color: ${color ? color : "black"};
    `}
  >
    <Content
      css={css`
        ${pageStyle};
        ${styles}
      `}
      ref={ref}
    >
      {children}
    </Content>
  </div>
))

const anchorStyle = css`
  &:link {
    text-decoration: none;
  }
  &:hover {
    opacity: 0.7;
  }
`
export default withApollo(Index)
