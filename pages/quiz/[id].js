/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { useState } from "react"
import withApollo from "../../lib/apollo"
import Layout from "../../components/Layout"
import { Title } from "../../components/pages/courses"
import CustomHeader from "../../components/CustomHeader"

import QuizContents from "../../components/QuizContents"

const Quiz = () => {
  return (
    <Layout>
      <CustomHeader />
      <Title>QUIZ</Title>
      <QuizContents />
    </Layout>
  )
}

export default withApollo(Quiz)