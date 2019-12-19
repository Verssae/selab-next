/** @jsx jsx */
import { jsx, css, Global } from "@emotion/core"
import {useRef} from "react"
import { useQuery, useMutation } from '@apollo/react-hooks'
import { useState, useEffect } from 'react'
import theme from "./theme"
import styled from "@emotion/styled"

import TextareaAutosize from 'react-textarea-autosize'
import { ADD_ANSWER } from '../lib/query'

function AnswerButton({ quizId, content }) {
  const [addAnswer, { data }] = useMutation(ADD_ANSWER)
  const [answer, setAnswer] = useState(false)

  return (
    <div>
      <ol>
        {content.options.map((text) => (
          <li onClick={()=>setAnswer(text)} key={text} css={css`
            color: ${text == answer ? "red" : "black"};
            cursor: pointer;
          `}>{text}</li>
        ))}
      </ol>
      <button onClick={()=>{
        addAnswer({ variables: {
          quizId: quizId,
          userId: "selab",
          content: answer
        }})
      }}>Submit</button>
    </div>
    
  )
}

const SelectOpt = ({children}) => {
  <div>
    {children}
  </div>
}

const Submit = () => {
  return (
    <button onClick={console.log('Hi')}>Submit</button>
  )
}

export default AnswerButton