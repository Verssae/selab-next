/**@jsx jsx */
import { jsx, css, Global } from "@emotion/core"
import styled from "@emotion/styled"
import Markdown from "../../components/Markdown"
import slidesContents from "../../slides"
import Head from "next/head"
import Burger from  "../../components/Burger"
import CustomHeader from "../../components/CustomHeader"
import Layout from "../../components/Layout"

const Slide = ({ id }) => {
  const slides = slidesContents[id].contents

  return (
    <Layout styles={css`background: white;`}>
      <Head>
        <title>{`Software Engineering Lab - Slide ${id} `}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <CustomHeader />
      <div>
        {slides && (
         <Markdown value={slides} ppt={false}/>
        )}
      </div>
    </Layout>
  )
}

Slide.getInitialProps = async ({ query }) => {
  const { id } = query
  return { id }
}



export default Slide
