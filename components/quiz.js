import styled from "@emotion/styled"
import { css } from "@emotion/core"
import QuizContents from "./QuizContents"
import QuizList from "./QuizList"
import { useState } from "react"
import {Fade, Slide} from "react-reveal"

const Container = styled.div`
  /* border: 2px solid black; */
  /* border-radius: 5px; */
  /* width: 80vw; */
  width: 100%;
  padding: 1px 10vw;
  background: red;
  overflow: scroll;
`

const Title = styled.h1`
  color: black;
  margin-top: 89px;
  padding-left: 10vw;
  margin-bottom: 20px;
  font-size: 25pt;
  font-weight: normal;
`

const Button = styled.button`
  width: 60px;
  height: 60px;
  position: fixed;
  bottom: 20px;
  right: 30px;
  border: none;
  background: white;
  border-radius: 50%;
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.4);
  & img {
    width: 100%;
  }
`
export default function() {
  const [quizId, setQuizId] = useState(false)
  const [open, setOpen] = useState(false)

  return (
    <div>
      <Fade duration={500} bottom when={open}>
        <div style={styles.wrapper}>
          <Title>QUIZ</Title>

          <Container>
            {quizId ? (
              <QuizContents id={quizId} setter={setQuizId} />
            ) : (
              <QuizList setter={setQuizId} />
            )}
          </Container>
        </div>
      </Fade>
      <Button onClick={() => setOpen(!open)}>
            {open ? <img src="icons/cancel.svg" /> : <img src="icons/quiz.svg" />  }
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
    bottom: "100px",
    right: "30px",
    overflow: "hidden",
    border: "none",
    borderRadius: "5px",
    boxShadow: " 3px 3px 3px 3px rgba(0, 0, 0, 0.4)"
  }
}
