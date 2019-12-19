import styled from "@emotion/styled"
import { css } from "@emotion/core"
import QuizContents from "./QuizContents"
import QuizList from "./QuizList"
import CreateQuiz from './CreateQuiz'
import { useState } from "react"
import {Fade, Slide} from "react-reveal"
import QuizButton from "../public/icons/quiz.svg"
import CancelButton from "../public/icons/cancel.svg"

const Container = styled.div`
  /* border: 2px solid black; */
  /* border-radius: 5px; */
  /* width: 80vw; */
  width: 100%;
  /* padding: 1px 10vw; */
  overflow: scroll;
`


const Button = styled.button`
   z-index: 100;
  width: 60px;
  height: 60px;
  position: fixed;
  bottom: 80px;
  right: 30px;
  border: none;
  background: white;
  border-radius: 50%;
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.4);
  
`
export default function() {
  const [quizId, setQuizId] = useState(false)
  const [open, setOpen] = useState(false)
  const [create, setCreate] = useState(false)

  return (
    <div>
      <Fade duration={500} bottom when={open}>
        <div style={styles.wrapper}>
         

          <Container>
            {create ? <CreateQuiz setter={setCreate}/> : quizId ? (
              <QuizContents id={quizId} setter={setQuizId} />
            ) : (
              <QuizList setter={setQuizId} createSetter={setCreate}/>
            )}
          </Container>
        </div>
      </Fade>
      <Button onClick={() => setOpen(!open)}>
            {open ?  <CancelButton />  : <QuizButton />}
      </Button>
    </div>
  )
}

const styles = {
  wrapper: {
    width: "350px",
    height: "600px",
    background: "white",
    position: "fixed",
    bottom: "160px",
    right: "30px",
    overflow: "hidden",
    border: "none",
    borderRadius: "7px",
    boxShadow: " 0px 0px 5px 0.5px #D0D3D4"
  }
}
