import styled from "@emotion/styled"
import { css } from "@emotion/core"

export const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  background-color: ${(props) => props.bgColor};
`
export const pageStyle = css`
  height: 100vh;
  /* padding-left: 6vw; */
  margin: 0;
  @media screen and (max-width: 480px) {
    padding-left: 10px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  /* font-size: 20; */
`
export const Content = styled.div`
  ${(props) => props.css};
  width: 100%;
  height: 100vh;
  margin: 0;
  /* padding: 10px; */
  @media screen and (min-width: 1440px) {
    width: 1440px;
    margin: auto;
  }
`
