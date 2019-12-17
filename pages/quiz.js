/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { useState } from "react"
import withApollo from "../lib/apollo"
import Layout from "../components/Layout"
import { Title } from "../components/pages/courses"
import CustomHeader from "../components/CustomHeader"

import QuizList from "../components/QuizList"

const Quiz = () => {
  return (
    <Layout>
      <CustomHeader />
      <Title>QUIZ</Title>
      <QuizList />
    </Layout>
  )
}

export default withApollo(Quiz)