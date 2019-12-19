/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { useState } from "react"
import withApollo from "../lib/apollo"
import Layout from "../components/Layout"
import CustomHeader from "../components/CustomHeader"

import Quiz from "../components/Quiz"


const QuizPage = () => {
  return (
    <Layout>
      <CustomHeader />
     <Quiz />
    </Layout>
  )
}

export default withApollo(QuizPage)