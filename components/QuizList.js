/** @jsx jsx */
import { jsx, css, Global } from "@emotion/core"
import { useQuery, useSubscription } from '@apollo/react-hooks'
import { useState, useEffect } from 'react'
import theme from "./theme"
import styled from "@emotion/styled"
import gql from 'graphql-tag'

import PlusOneIcon from "./icons/PlusOneIcon"

const GET_QUIZ_LIST = gql`
  query getAllQuizzes {
    result: quizzes{
      id
      title
      content
      createdAt
    }
  }
`

const NEW_QUIZ_SUBSCRIPTION = gql`
  subscription onNewQuiz{
    newQuiz {
      id
      title
      content
      createdAt
    }
  }
`

const QuizLabel = ({ children }) => {
  return (
    <div css={css`
      padding: 10px;
      &:hover {
        background-color: #D3D3D3;
      }
      display:flex;
    `}>
      {children}
    </div>
  )
}

function CourseQuiz({ code, semester }) {
  const [quizList, setQuizList] = useState([])

  const { data } = useQuery(
    GET_QUIZ_LIST
  )
  
  useSubscription(
    NEW_QUIZ_SUBSCRIPTION,
    {
      onSubscriptionData: ({subscriptionData}) => {
        if (data) {
          setQuizList((quizList) => [
            subscriptionData.data.newQuiz, ...quizList
          ])
        }
      }
    }
  )
  
  useEffect(()=>{
    if (data) {
      setQuizList(data.result)
    }
  },[data])

  return (
    <Container>
      {quizList.map(({id, title, content, createdAt}) => (
        <QuizLabel key={id}>
          <PlusOneIcon />
          <div>
            <QuizLabelTitle>{title}</QuizLabelTitle>
            <QuizLabelDate>{createdAt}</QuizLabelDate>
          </div>
        </QuizLabel>
      ))}
    </Container>
  )
}

const Container = styled.div`
  border: 2px solid black;
  border-radius: 8px;
  overflow: hidden;
  width: 80vw;
  margin: auto;
  background: white;
`

const QuizLabelTitle = styled.p`
  margin: 0;
  font-weight: bold;
  &:hover {
    cursor: pointer;
    color: #0067A3;
  }
`

const QuizLabelDate = styled.p`
  margin: 0;
  font-size: 12pt;
`

export default CourseQuiz