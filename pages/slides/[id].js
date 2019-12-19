/**@jsx jsx */
import { jsx, css, Global } from "@emotion/core"
import styled from "@emotion/styled"
import Markdown from "../../components/Markdown"
import slidesContents from "../../slides/"
import { useRouter } from "next/router"
import Head from "next/head"
import { useState, useEffect } from "react"
import theme from "../../components/theme"
import Footer from "../../components/Footer"
import SlideHeader from "../../components/SlideHeader"
import Burger from "../../components/Burger"
import Layout from "../../components/Layout"

const Slide = ({ id }) => {
  const [page, setPage] = useState(0)
  const slides = slidesContents[id].contents.split("---")
  const chapters = slidesContents.map(({ title }) => title)

  const goNext = () =>
    setPage((page) => (page < slides.length - 1 ? page + 1 : page))

  const goPrev = () => setPage((page) => (page > 0 ? page - 1 : page))

  const options = slides.map((text) =>
    text
      .trim()
      .split("\n")[0]
      .replace(/^# /, "")
  )

  useEffect(() => {
    const keyDownHandler = ({ key }) => {
      if (key === "ArrowLeft") {
        goPrev()
      } else if (key === "ArrowRight") {
        goNext()
      }
    }
    window.addEventListener("keydown", keyDownHandler)
    return () => {
      window.removeEventListener("keydown", keyDownHandler)
    }
  }, [])

  return (
    <Layout
      styles={css`
        background: white;
      `}
    >
      <Head>
        <title>{`Software Engineering Lab - Slide ${id} `}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <Burger isSlide/>
      <SlideHeader options={options} callback={setPage} page={page}>
        {options[page]}
      </SlideHeader>
      {/* <Burger /> */}
     
        {slides ? (
          <Markdown value={slides[page]} isHeading={true} />
        ) : (
          "Loading"
        )}
      
      <Footer
        goPrev={goPrev}
        goNext={goNext}
        page={page}
        chapters={chapters}
        max={slides.length}
        chapter={id}
      >
        <h1>{"CSE326: Web Application Development"}</h1>
        <h2>{slidesContents[id].title}</h2>
      </Footer>
    </Layout>
  )
}


Slide.getInitialProps = async ({ query }) => {
  const { id } = query
  return { id }
}

// const Layout = ({ children }) => (
//   <div>
//     <Global
//       styles={css`
//         html,
//         body {
//           margin: 0;
//           padding: 0;
//           font-family: Helvetica, Arial, sans-serif;
//         }
//       `}
//     />
//     {children}
//   </div>
// )

export default Slide
