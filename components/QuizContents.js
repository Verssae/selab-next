/** @jsx jsx */
import { jsx, css, Global } from "@emotion/core"
import { useQuery, useSubscription } from '@apollo/react-hooks'
import { useState, useEffect } from 'react'
import theme from "./theme"
import styled from "@emotion/styled"

import BackButtonIcon from './icons/BackButtonIcon'
import { GET_QUIZ_CONTENTS } from '../lib/query'

function QuizContents({ id, setter }) {
  const { loading, error, data } = useQuery(
    GET_QUIZ_CONTENTS, { variables: { id: id } }
  )

  if (loading) return <p>Loading...</p>
  const { quiz } = data

  return (
    <div>
      <Back setter={setter}/>
      <h1>{quiz.title}</h1>
      <h2>{quiz.content}</h2>
      <ul>
      {quiz.comments.map(({name, content}) => (
        <li>{name} : {content}</li>
      ))}
      </ul>
    </div>
  )
}

const Back = ({ setter }) => (
  <div css={css`
    background-color: black;
  `} onClick={()=>setter(false)}>
    <BackButtonIcon />
  </div>
)

export default QuizContents