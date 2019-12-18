/** @jsx jsx */
import { jsx, css, Global } from "@emotion/core"
import { useQuery, useSubscription } from '@apollo/react-hooks'
import { useState, useEffect } from 'react'
import theme from "./theme"
import styled from "@emotion/styled"
import gql from 'graphql-tag'
import Link from "next/link"

import PlusOneIcon from "./icons/PlusOneIcon"

const GET_QUIZ_LIST = gql`
  query getAllQuizzes {
    result: quizzes{
      id
      title
      course {
        code
      }
      semester {
        semester
      }
      content
      createdAt
      createdBy
      comments {
        name
        content
      }
    }
  }
`

const NEW_QUIZ_SUBSCRIPTION = gql`
  subscription onNewQuiz{
    newQuiz {
      id
      title
      course {
        code
      }
      semester {
        semester
      }
      content
      createdAt
      createdBy
    }
  }
`

const QuizLabel = ({ children }) => {
  return (
    <div css={css`
      padding: 10px;
      border-bottom: 1px solid gray;
      &:hover {
        background-color: #D3D3D3;
      }
      display:flex;
    `}>
      {children}
    </div>
  )
}

function CourseQuiz() {
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
      {quizList.map((quiz) => (
        <QuizItem quiz={quiz}/>
      ))}
    </Container>
  )
}

function QuizItem(quiz) {
  const { id, title, createdAt, createdBy, course, content, comments } = quiz.quiz
  const [isClick, setIsClick] = useState(false)
  console.log(comments)
  return (
    <div>
      <QuizLabel key={id} >
        <PlusOneIcon />
        <div>
          <QuizLabelTitle>
            {/* <Link href={`/quiz/${id}`}> */}
            <a onClick={()=>setIsClick(!isClick)}>
              <TitleLink>{title}</TitleLink>
            </a>
            {/* </Link> */}
            <Label>{course.code}</Label>
          </QuizLabelTitle>
          <QuizLabelDate>opened at {createdAt} by {createdBy}</QuizLabelDate>
        </div>
      </QuizLabel>
      {isClick ? 
      <>
        <p>{content}</p>
        <ul>
          {comments.map(({name, content}) => (
            <li>
              <p>{name}  :  {content}</p>
            </li>
          ))}
        </ul>
      </>
      :""}
    </div>
  )
}

const TitleLink = styled.span`
  &:hover {
    cursor: pointer;
    color: #0067A3;
  }
`

const Label = styled.div`
  margin-left: 10px;
  border-radius: 6px;
  font-size: 10pt;
  padding: 5px;
  background-color: coral;
  vertical-align: middle;
`

const Container = styled.div`
  border: 2px solid black;
  border-radius: 5px;
  overflow: hidden;
  width: 80vw;
  margin: auto;
  background: white;
`

const QuizLabelTitle = styled.p`
  margin: 0;
  font-weight: bold;
  display: flex;
  vertical-align: middle;
`

const QuizLabelDate = styled.p`
  margin: 0;
  font-size: 12pt;
`

export default CourseQuiz