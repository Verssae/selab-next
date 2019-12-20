/** @jsx jsx */
import { jsx, css, Global } from "@emotion/core"
import { useMutation } from "@apollo/react-hooks"
import { useState, useEffect, useRef } from "react"
import theme from "./theme"
import styled from "@emotion/styled"

import BackButtonIcon from "./icons/BackButtonIcon"
import TextareaAutosize from "react-textarea-autosize"
import { ADD_QUIZ } from "../lib/query"

import Select from "react-select"

function QuizContents({ id, setter }) {
  const [quizType, setQuizType] = useState("ESSAY")
  const [addQuiz, { data }] = useMutation(ADD_QUIZ)

  const ref_title = useRef()
  const ref_desc = useRef()
  const ref_opt1 = useRef()
  const ref_opt2 = useRef()
  const ref_opt3 = useRef()

  return (
    <Layout>
      <TopState />
      <Back setter={setter} />
      <Container>
        <form>
          <Section>
            <fieldset>
              <legend>Title</legend>
              <input
                type="text"
                placeholder="Title"
                css={css`
                  width: 100%;
                  border-style: none;
                  border-bottom: 1px solid #d0d3d4;
                `}
                ref={ref_title}
              />
            </fieldset>
          </Section>
          <Section>
            <fieldset>
              <legend>Description</legend>
              <Textarea placeholder="Description" inputRef={ref_desc}/>
            </fieldset>
          </Section>
          <Section>
            <fieldset>
              <legend>Quiz Type</legend>
              <label>
                <input
                  type="radio"
                  value="ESSAY"
                  name="quizType"
                  checked={quizType == "ESSAY"}
                  onChange={(e) => setQuizType(e.target.value)}
                />
                String
              </label>
              <label>
                <input
                  type="radio"
                  value="CHOICE"
                  name="quizType"
                  checked={quizType == "CHOICE"}
                  onChange={(e) => setQuizType(e.target.value)}
                />
                Choice
              </label>
            </fieldset>
          </Section>
          {quizType == "CHOICE" ?
          <Section>
            <fieldset>
              <legend>Choice Options</legend>
              <Input type="text" placeholder="opt1" ref={ref_opt1}/>
              <Input type="text" placeholder="opt2" ref={ref_opt2}/>
              <Input type="text" placeholder="opt3" ref={ref_opt3}/>
            </fieldset>
          </Section>
          : <></>}
          <button onClick={e => {
            e.preventDefault();
            let options
            if (quizType == "ESSAY") {
              options = [""]
            } else {
              options = [ref_opt1.current.value, ref_opt2.current.value, ref_opt3.current.value]
            }
            addQuiz({ variables: {
              userId: "selab",
              title: ref_title.current.value,
              description: ref_desc.current.value,
              type: quizType,
              options: options
            }})
            setter(false)
          }}>Create</button>
        </form>
      </Container>
    </Layout>
  )
}

const Input = styled.input`
  width: 100%;
  margin: 3px 0px;
  font-size: 9pt;
`

const Section = styled.div`
  border-bottom: 1px solid #d0d3d4;
  padding: 10px 0px;
  & div {
    font-size: 14pt;
    font-weight: bold;
  }
  & input {
    font-size: 17pt;
  }
`

const Textarea = styled(TextareaAutosize)`
  width: 100%;
  font-size: 14px;
  resize: none;
  border-style: none;
  border-bottom: 1px solid #d0d3d4;
  min-height: 50px;
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
  margin: 20px;
`

const Back = ({ setter }) => (
  <div
    css={css`
      margin: 10px;
      border-bottom: 1px solid #d0d3d4;
    `}
  >
    <BackButtonIcon onClick={() => setter(false)} />
  </div>
)

export default QuizContents
