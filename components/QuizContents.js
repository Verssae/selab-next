/** @jsx jsx */
import { jsx, css, Global } from "@emotion/core"
import { useQuery, useSubscription } from '@apollo/react-hooks'
import { useState, useEffect } from 'react'
import theme from "./theme"
import styled from "@emotion/styled"
import gql from 'graphql-tag'

function QuizContents({ id, setter }) {
  console.log(id)
  return (
    <div>
      <h1>Quiz Contents of {id}</h1>
      <button onClick={()=>setter(false)}>Back</button>
    </div>
  )
}

export default QuizContents