/**@jsx jsx */
import { useRef, useState, useEffect } from "react"
import { jsx, css, Global } from "@emotion/core"
import styled from "@emotion/styled"

const Scroller = () => {
  return (
    <div>
      <div class="scroll">
        <div class="parent">
          <div class="sticky">.sticky</div>
          <div class="static">.static</div>

          <b class="fixed">.fixed</b>
        </div>
        <div class="parent">
        <div class="sticky">.sticky</div>
          <div class="static">.static</div>
          
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <style global jsx>{`
        .scroll {
          display: inline-block;
          width: 90vw;
          height: 50vh;
          overflow: auto;
          padding: 0 4px;
          vertical-align: middle;
          border: 4px solid #000;
        }
        .parent {
          height: 50vh;
          margin: 4px 0;
          border: 4px solid #666;
        }
        .static {
          /* position: static; */
          background: gray;
          width: 100%;
          height: 50vh;
        }
        @supports (position: sticky) or (position: -webkit-sticky) {
          .sticky {
            position: -webkit-sticky; /* 사파리 브라우저 지원 */
            position: sticky;
            top: 150px;
            width: 150px;
            background: red;
          }
        }
        .fixed {
          position: fixed;
          top: 20px;
          left: 116px;
          background: blue;
        }
        body {
          color: #fff;
          background-image: linear-gradient(#fff 12px, #eee 12px, #eee 24px);
          background-size: 100% 24px;
        }
      `}</style>
    </div>
  )
}

const Container = styled.div`
  background-color: green;
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow: scroll;
`
const Aside = styled.div`
  background-color: yellow;
  width: 30vw;
  height: 100vh;
  position: sticky;
  top: 30px;
  z-index: 100;
`
const Scrollable = styled.div`
  background-color: blue;
  width: 65vw;
  height: 100vh;
`
const Item = styled.div`
  background-color: purple;
  width: 100%;
  height: 60vh;
  margin-top: 10px;
`

export default Scroller
