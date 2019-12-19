/** @jsx jsx */
import { jsx, css, Global } from "@emotion/core"
import { useQuery, useSubscription } from '@apollo/react-hooks'
import { useState, useEffect } from 'react'
import theme from "./theme"
import styled from "@emotion/styled"

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
        <LeftColor />
        <Right>
          <div>
          <QuizLabelTitle>
            <a onClick={()=>setter(id)}>
              <TitleLink>{title}</TitleLink>
            </a>
            <Label>{course.code}</Label>
          </QuizLabelTitle>
          <QuizLabelDate>opened at {createdAt} by {createdBy}</QuizLabelDate>
          </div>
        </Right>
      </QuizLabel>
    </div>
  )
}

const QuizLabel = styled.div`
  margin: 20px;
  box-shadow: 0px 0px 5px 0.5px #D0D3D4;
  border-radius: 7px;
  height: 90px;
  overflow: hidden;
`

const LeftColor = styled.div`
  background-color: #007944;
  width: 15px;
  height: inherit;
  float: left;
  margin-right: 10px;
`

const Right = styled.div`
  height: inherit;
  display: flex;
  align-items: center;
`

const TitleLink = styled.div`
  margin: 0px ;
  overflow: hidden;
  text-overflow: ellipsis;
  &:hover {
    cursor: pointer;
    color: #1089ff;
  }
`

const Label = styled.span`
  margin-left: 10px;
  border-radius: 6px;
  font-size: 10pt;
  padding: 5px;
  background-color: #6bc5d2;
`

const QuizLabelTitle = styled.div`
  margin: 0;
  font-weight: bold;
  display: flex;
  align-items: center;
`

const QuizLabelDate = styled.p`
  margin: 0;
  font-size: 12pt;
  color: #5d5d5d;
`

export default QuizList