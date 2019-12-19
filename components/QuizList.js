/** @jsx jsx */
import { jsx, css, Global } from "@emotion/core"
import { useQuery, useSubscription } from '@apollo/react-hooks'
import { useState, useEffect } from 'react'
import theme from "./theme"
import styled from "@emotion/styled"
import gql from 'graphql-tag'

import PlusOneIcon from "./icons/PlusOneIcon"

import  { GET_QUIZ_LIST, NEW_QUIZ_SUBSCRIPTION } from '../lib/query'

function QuizList({ setter }) {
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
    <>
      {quizList.map((quiz) => (
        <QuizItem quiz={quiz} key={quiz.id} setter={setter}/>
      ))}
    </>
  )
}

function QuizItem({quiz, setter}) {
  const { id, title, createdAt, createdBy, course, content, comments } = quiz
  return (
    <div>
      <QuizLabel key={id} >
        <PlusOneIcon />
        <div>
          <QuizLabelTitle>
            <a onClick={()=>setter(id)}>
              <TitleLink>{title}</TitleLink>
            </a>
            <Label>{course.code}</Label>
          </QuizLabelTitle>
          <QuizLabelDate>opened at {createdAt} by {createdBy}</QuizLabelDate>
        </div>
      </QuizLabel>
    </div>
  )
}

const QuizLabel = styled.div`
  padding: 10px;
  border-bottom: 1px solid gray;
  &:hover {
    background-color: #D3D3D3;
  }
  display:flex;
`

const TitleLink = styled.span`
  &:hover {
    cursor: pointer;
    color: #0067A3;
  }
`

const Label = styled.span`
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

export default QuizList