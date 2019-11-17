import styled from "@emotion/styled"
import { css } from "@emotion/core"

export const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  background-color: ${props => props.bgColor};
`

export const linkStyle = css`
  font-size: 20px;
  margin-left: 1vw;
  margin-right: 1vw;

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

export const headerContentStyle = css`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  @media screen and (min-width: 1440px) {
    width: 1440px;
    margin: auto;
  }
`
