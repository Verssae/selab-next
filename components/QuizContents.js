/** @jsx jsx */
import { jsx, css, Global } from "@emotion/core"
import { useQuery, useSubscription } from '@apollo/react-hooks'
import { useState, useEffect } from 'react'
import theme from "./theme"
import styled from "@emotion/styled"

import BackButtonIcon from './icons/BackButtonIcon'
import { GET_QUIZ_CONTENTS } from '../lib/query'
import AnswerString from './AnswerString'

function QuizContents({ id, setter }) {
  const [state, setState] = useState(true)
  const { loading, error, data } = useQuery(
    GET_QUIZ_CONTENTS, { variables: { id: id } }
  )

  if (loading) return <p>Loading...</p>
  const { quiz } = data

  return (
    <Layout>
      <TopState />
      <Back setter={setter} />
      <Container>
        <h1>{quiz.title}</h1>
        <p>{quiz.description}</p>
        <AnswerString quizId={id} setter={setState}/>
        <ul>
        {quiz.answers.map(({id, user, content, createdAt}) => (
          <li key={id}>
            {user.user_id} - {createdAt}<br/>{content}
          </li>
        ))}
        </ul>
      </Container>
    </Layout>
  )
}

const TopState = styled.div`
  width: 100%;
  height: 10px;
  background-color: #007944;
`

const Layout = styled.div`
  margin: 20px;
  box-shadow: 0px 0px 5px 0.5px #D0D3D4;
  border-radius: 7px;
  overflow: hidden;
`

const Container = styled.div`
  margin:20px;
`

const Back = ({ setter }) => (
  <div css={css`
    margin: 10px;
    border-bottom: 1px solid #D0D3D4;
  `}>
    <BackButtonIcon onClick={()=>setter(false)}/>
  </div>
)

export default QuizContents