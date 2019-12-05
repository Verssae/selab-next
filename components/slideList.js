import styled from "@emotion/styled"
import theme from "./theme"
import ContentLoader from "react-content-loader"

export const All = styled.div`
  display: flex;
  margin: 0;
  margin-top: 10px;
  color: white;
`
export const Lecture = styled.div`
  display: flex;
  flex-flow: column;
  width: 50%;
  border-right: thin solid #fbe8b1;;
  padding-right: 40px;
`
export const Lab = styled.div`
  display: flex;
  flex-flow: column;
  width: 50%;
`
export const Li = styled.li`
  display: flex;
  margin: 3px;
`
export const H2 = styled.h4`
  text-align: center;
  margin: 0;
  color: #fbe8b1;
  &:first-child{
    border-bottom: 3px solid #fbe8b1;
    width: 20%;
    text-align: center;
    padding: 5px;
    margin-left: 5px;
    margin-right: 5px;
  }
  &:last-child{
    border-bottom: 3px solid #fbe8b1;
    width: 80%;
    padding: 5px;
    margin-left: 5px;
    margin-right: 5px;
  }
`
export const Span = styled.span`
  font-size: 13pt;
  margin-top: 5px;
  &:first-child{
    width: 20%;
    text-align: center;
    padding: 5px;
    margin-left: 5px;
    margin-right: 5px;
  }
  &:last-child{
    width: 80%;
    padding: 5px;
    margin-left: 5px;
    margin-right: 5px;
  }
  &:last-child:hover{
    border: 1px solid #fbe8b1;
    background-color: #fbe8b1;
    color: black;
    border-radius: 10px;
  }
`
