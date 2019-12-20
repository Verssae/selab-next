/** @jsx jsx */
import { jsx, css, Global } from "@emotion/core"
import { useRef } from "react"
import { useQuery, useMutation } from "@apollo/react-hooks"
import { useState, useEffect } from "react"
import theme from "./theme"
import styled from "@emotion/styled"

import TextareaAutosize from "react-textarea-autosize"
import { ADD_ANSWER } from "../lib/query"

function AnswerButton({ quizId, content }) {
  const [addAnswer, { data }] = useMutation(ADD_ANSWER)
  const [answer, setAnswer] = useState(false)

  const ref_name = useRef()

  return (
    <div>
      <ol>
        {content.options.map((text) => {
          if (text != "")
            return (
              <li
                onClick={() => setAnswer(text)}
                key={text}
                css={css`
                  color: ${text == answer ? "red" : "black"};
                  cursor: pointer;
                `}
              >
                {text}
              </li>
            )
        })}
      </ol>
      <input type="text" placeholder="name" ref={ref_name}/>
      <button
        onClick={() => {
          addAnswer({
            variables: {
              quizId: quizId,
              userId: ref_name.current.value,
              content: answer
            }
          })
          setAnswer(false)
          ref_name.current.value = ""
        }}
      >
        Submit
      </button>
    </div>
  )
}

const SelectOpt = ({ children }) => {
  ;<div>{children}</div>
}

const Submit = () => {
  return <button onClick={console.log("Hi")}>Submit</button>
}

export default AnswerButton
