/** @jsx jsx */
import { jsx, css, Global } from "@emotion/core"
import { useQuery, useSubscription } from "@apollo/react-hooks"
import { useState, useEffect, useRef } from "react"
import theme from "./theme"
import styled from "@emotion/styled"

import BackButtonIcon from "./icons/BackButtonIcon"
import { GET_QUIZ_CONTENTS, NEW_ANSWER_SUBSCRIPTION } from "../lib/query"
import AnswerString from "./AnswerString"
import AnswerSelect from "./AnswerSelect"

function QuizContents({ id, setter }) {
  const [answerList, setAnswerList] = useState([])

  const { loading, error, data } = useQuery(GET_QUIZ_CONTENTS, {
    variables: { id: id },
    fetchPolicy: "no-cache"
  })

  useSubscription(NEW_ANSWER_SUBSCRIPTION, {
    onSubscriptionData: ({ subscriptionData }) => {
      if (data) {
        setAnswerList((answerList) => [
          subscriptionData.data.newAnswer,
          ...answerList
        ])
      }
    },
    variables: {
      quizId: id
    }
  })
  useEffect(() => {
    if (data) {
      setAnswerList(data.quiz.answers)
    }
  }, [data])

  if (loading) return <p>Loading...</p>
  const { quiz } = data
  return (
    <Layout>
      <TopState />
      <Back setter={setter} />
      <Container>
        <h1>{quiz.title}</h1>
        <p>{quiz.description}</p>
        {quiz.content.type == "CHOICE" ? (
          <AnswerSelect quizId={id} content={quiz.content} />
        ) : (
          <AnswerString quizId={id} />
        )}
        <div css={css`
          padding: 0px 3px;
          overflow: scroll;
          max-height: 300px;
        `}>
        {answerList.map((answer) => (
          <Answer answer={answer}/>
        ))}
        </div>
      </Container>
    </Layout>
  )
}

const Answer = ({answer}) => {
  const { id, user, content, createdAt } = answer
  return (
    <AnswerContainer >
      <p>{user} <span>({createdAt.split('T')[0]} {createdAt.split('T')[1].slice(0,5)})</span></p>
      <div css={css`
        height: 1px;
        width: 100%;
        background-color: black;
        margin: 3px 0px;
      `}></div>
      <div>
        {content}
      </div>
    </AnswerContainer>
  )
}

const AnswerContainer = styled.div`
  box-shadow: 0px 0px 3px 0.5px #D0D3D4;
  border-radius: 7px;
  margin: 10px 0px;
  padding:5px;
  & p {
    font-size: 9pt;
    color: #111d5e;
    margin:0;
    padding:0;
  }
`

const TopState = styled.div`
  width: 100%;
  height: 10px;
  background-color: #007944;
`

const Layout = styled.div`
  /* padding: 5px; */
  font-size: 12pt;
`

const Container = styled.div`
  margin: 20px;
`

const Back = ({ setter }) => (
  <div
    css={css`
      margin: 10px;
      border-bottom: 1px solid #d0d3d4;
    `}
  >
    <BackButtonIcon onClick={() => setter(false)} />
  </div>
)

export default QuizContents
