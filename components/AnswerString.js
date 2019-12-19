/** @jsx jsx */
import { jsx, css, Global } from "@emotion/core"
import { useQuery, useSubscription } from '@apollo/react-hooks'
import { useState, useEffect } from 'react'
import theme from "./theme"
import styled from "@emotion/styled"

import TextareaAutosize from 'react-textarea-autosize';

function AnswerString() {
  return (
    <form>
      <TextareaAutosize autoFocus placeholder="Input your answer!" rows="2" css={css`
        width: 100%;
        font-size: 24px;
        resize: none;
        padding: 3px;
        border: 1px solid #D0D3D4;
      `}/>
      <div>
        <input type="submit" css={css`
          float:right;
        `}></input>
      </div>
    </form>
  )
}

export default AnswerString