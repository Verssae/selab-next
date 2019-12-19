/** @jsx jsx */
import { jsx, css, Global } from "@emotion/core"
import {useRef} from "react"
import { useQuery, useMutation } from '@apollo/react-hooks'
import { useState, useEffect } from 'react'
import theme from "./theme"
import styled from "@emotion/styled"

import TextareaAutosize from 'react-textarea-autosize';
import { ADD_ANSWER } from '../lib/query'

function AnswerString({ quizId }) {
  // const [content, setContent] = useState('')
  const [addAnswer, { data }] = useMutation(ADD_ANSWER)
  const ref = useRef()

  return (
    <form onSubmit={e => {
      e.preventDefault();
      addAnswer({ variables: {
        quizId: quizId,
        userId: "ck4cwzpm201bm0790454i1uz0",
        content: ref.current.value
      }})
      ref.current.value = ''
    }}>
      <Textarea inputRef={ref} autoFocus placeholder="Input your answer!" rows="2" />
      <Sumbit/>
    </form>
  )
}

const Textarea = styled(TextareaAutosize)`
  width: 100%;
  font-size: 24px;
  resize: none;
  padding: 3px;
  border: 1px solid #D0D3D4;
`

const Sumbit = () => {
  return (
    <button type="submit">Submit</button>
  )
}

export default AnswerString