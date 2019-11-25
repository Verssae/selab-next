/**@jsx jsx */
import { jsx, css, Global } from "@emotion/core"
import styled from "@emotion/styled"
import Markdown from "../../components/Markdown"
import slidesContents from "../../slides"
import { useRouter } from "next/router"
import Head from "next/head"
import { useState, useEffect } from "react"
import theme from "../../components/theme"
import Footer from "../../components/Footer"
import ReactMarkDown from "react-markdown"
import CodeBlock from "../../components/CodeBlock"

const Slide = ({ id }) => {
  const slides = slidesContents[id].contents

  return (
    <Layout>
      <Head>
        <title>{`Software Engineering Lab - Slide ${id} `}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>

      <div>
        {slides && (
         <Markdown value={slides} isHeading={false}/>
        )}
      </div>
    </Layout>
  )
}

Slide.getInitialProps = async ({ query }) => {
  const { id } = query
  return { id }
}

const Layout = ({ children }) => (
  <div>
    <Global
      styles={css`
        html,
        body {
          margin: 0;
          padding: 0;
          font-family: Helvetica, Arial, sans-serif;
        }
      `}
    />
    {children}
  </div>
)

export default Slide
