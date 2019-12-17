/** @jsx jsx */
import { jsx, css, Global } from "@emotion/core"
import { useQuery, useSubscription } from '@apollo/react-hooks'
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

const QuizSubscribe = () => {
  const { loading, error, data } = useSubscription(
    NEW_QUIZ_SUBSCRIPTION
  )
  if (loading) return <></>
  if (error || !data) return <div>Error!</div>
  
  const { newQuiz } = data
  return (
    <QuizLabel>
      <PlusOneIcon />
      <div>
        <QuizLabelTitle>{newQuiz.title}</QuizLabelTitle>
        <QuizLabelDate>{newQuiz.createdAt}</QuizLabelDate>
      </div>
    </QuizLabel>
  )

}

function CourseQuiz({ code, semester }) {
  const { loading, error, data } = useQuery(
    GET_QUIZ_LIST
  )
  
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>
  const quizList = data.result

  return (
    <Container>
      <QuizSubscribe />
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