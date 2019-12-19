import styled from "@emotion/styled"
import { css } from "@emotion/core"
import theme from "../theme"

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
export const CourseView = styled.div`
  margin-right: 3%;
  margin-left: 3%;
  margin-top: 0;
  & h1{
    text-align: center;
  }
`
export const Contact = styled.div`
  font-size: 20px;
  @media screen and (max-width: 950px){
    font-size: 15px;
    margin: 3%;
    & img{
      @media screen and (max-width:950px){
        width: 320px;
      }
    }
  }
  & h1{
    text-align: center;
  }
  & div{
    display: flex;
  }
  & ul{
    margin-left: 5%;
  }
  & ul li p:nth-child(2){
    font-weight: bold;
  }
`
export const Second = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-around;

  
  & li {
    list-style-type: square;
    font-size: 0.7em;
  }
 
  & h2 {
    color: ${theme.COLORS.sapphire};
  }
  & h2:hover {
    opacity: 0.7;
  }
`
