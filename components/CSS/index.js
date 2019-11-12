import styled from "@emotion/styled"
import { css } from "@emotion/core"

export const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  overflow: hidden;
`

export const linkStyle = css`
  font-size: 20px;
  margin-left: 2vw;
  margin-right: 2vw;

  &:hover {
    text-decoration: underline solid;
    transition: 0.5s;
  }
`

export const titleStyle = css`
  ${linkStyle}
  font-size: 40px;
  font-weight: bold;

  &:hover {
    text-decoration: none;
  }
`

export const pageStyle = css`
  width: 100%;
  height: 100vh;
  padding-left: 6vw;
  display: flex;
  justify-content: center;
  align-items: center;
  /* font-size: 20; */
`

export const Content = styled.div`
  ${(prpos) => prpos.css};
  width: 100%;
  @media screen and (min-width: 1440px) {
    width: 1440px;
    margin: auto;
  }
`
