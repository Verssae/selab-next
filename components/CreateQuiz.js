/** @jsx jsx */
import { jsx, css, Global } from "@emotion/core"
import { useMutation } from '@apollo/react-hooks'
import { useState, useEffect } from 'react'
import theme from "./theme"
import styled from "@emotion/styled"

import BackButtonIcon from './icons/BackButtonIcon'
import { GET_QUIZ_CONTENTS, NEW_ANSWER_SUBSCRIPTION } from '../lib/query'
import AnswerString from './AnswerString'
import AnswerSelect from './AnswerSelect'

function QuizContents({ id, setter }) {
  return (
    <Layout>
      <TopState />
      <Back setter={setter} />
      <Container>
        <form>
          <Section>
            title:<input type="text"></input>
          </Section>
        </form>
      </Container>
    </Layout>
  )
}

const Section = styled.div`
  border-bottom: 1px solid #D0D3D4;
  padding: 8px;
  
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