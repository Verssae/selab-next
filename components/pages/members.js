import styled from "@emotion/styled"
import theme from "../theme"

export const Title = styled.h1`
  font-size: 48px;
  color: ${theme.COLORS.vanila};
  margin: auto;
`

export const Contents = styled.div`
  display: flex;
  flex-flow: column;
  margin: 10%;
  margin-top: 90px;
  font-size: 16px;
  @media screen and (max-width:1165px){
    font-size: 13px;
  }
  @media screen and (max-width:600px){
    font-size: 10px;
  }
`
export const Section = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;

  & h1{
    color: white;
  }
`

export const Subject = styled.div`
  display: flex;
  @media screen and (max-width:1165px){
    flex-flow:column;
  }
  justify-content: space-around;
  align-items: center;
  margin:10px;
  padding: 10px;
  background-color: ${theme.COLORS.vanila};
  border: 3px solid ${theme.COLORS.vanila};
  border-radius: 10px;

  & img{
    width: 150px;
    height: 180px;
    @media screen and (max-width:600px){
      width: 65px;
      height: 80px;
    }
    border: thin solid black;
  }
  & a{
    text-decoration: underline;
    color: black;
  }
  & h2{
    margin: 5px;
    font-weight: bold;
  }
  & h3{
    margin:0px;
  }
  & .left_info{
    width: 435px;
    @media screen and (max-width:600px){
      width: 190px;
    }
  }
  & .right_info{
    width: 550px;
    @media screen and (max-width:600px){
      width: 240px;
    }
    display: flex;
    flex-flow: column;
    justify-content: flext-start;
    align-items: flext-start;
  }
`
export const Name = styled.li`
  font-weight: bold;
`
