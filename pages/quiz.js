/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { useState } from "react"
import withApollo from "../lib/apollo"
import Layout from "../components/Layout"
import CustomHeader from "../components/CustomHeader"
import { Title, Container } from "../components/pages/quiz"

import QuizList from "../components/QuizList"
import QuizContents from "../components/QuizContents"

const Quiz = () => {
  const [quizId, setQuizId] = useState(false)
  return (
    <Layout>
      <CustomHeader />
      <Title>QUIZ</Title>
      <Container>
        {quizId ? <QuizContents id={quizId} setter={setQuizId}/> : <QuizList setter={setQuizId} />}
      </Container>
    </Layout>
  )
}

export default withApollo(Quiz)