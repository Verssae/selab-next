import styled from "@emotion/styled"
import theme from "../theme"

export const Body=styled.body`
    margin-top:90px;
`

export const Nav=styled.div`
    font-size: 11pt;
    @media screen and (max-width : 1000px){
        font-size: 10pt;
    }
    @media screen and (max-width : 480px){
        font-size: 9pt;
    }
    overflow: hidden;
    color:white;
    margin:0;

    padding-right:50px;
    & p{
        float: right;
        margin-top:90px;
        margin-right:30px;
    }
    & p:hover{
        font-weight:bold;
        color:${theme.COLORS.vanila}
    }
`


export const Left=styled.div`
    display: flex;
    flex-direction: column;
    border-right:solid;
    justify-content: center;
    color:${theme.COLORS.vanila};
    width:18%;
    margin-right:5%;
    font-size:11pt;
    @media screen and (max-width : 1000px){
        font-size: 9pt;
    }
    @media screen and (max-width : 480px){
        display: none;
    }
    padding-right:2%;
    & a{
        text-decoration: none;
        color:${theme.COLORS.vanila};
        margin: 8%;
    }
    & a:hover{
        font-weight: bold;
    }
`

export const A=styled.a`
    text-decoration: underline;
    color: white;
    &:hover{
        color:black;
    }
`
export const Right=styled.div`
    display: flex;
    flex-direction: column;
    height:500px;
    overflow-y:scroll;
    ::-webkit-scrollbar{
        display: none;
    }
    padding:2%;
    color:white;
    font-size : 12pt;
    @media screen and (max-width : 1000px){
        font-size: 10pt;
    }
    @media screen and (max-width : 480px){
        font-size: 7pt;
    }
    width:70%
    &::-webkit-scrollbar{
        overflow-y:hidden;
    }
    & h3{
        color:#fbe8b1 ;
        font-size:15pt;
        @media screen and (max-width : 1000px){
            font-size: 13pt;
        }
        @media screen and (max-width : 480px){
            font-size: 10pt;
        }
    }
`

export const All = styled.div`
  display: flex;
  margin: 0;
  margin-top: 10px;
  color: white;
  justify-content:center;
  width:80%;
  margin-left:7%;
`
export const Slides = styled.div`
  display: flex;
  flex-flow: column;
  width:100%;
`

export const Li = styled.li`
  display: flex;
  margin: 3px;
`
export const H2 = styled.h4`
  text-align: center;
  margin: 0;
  color: #fbe8b1;
  @media screen and (max-width : 1000px){
    font-size: 13pt;
  }
  @media screen and (max-width : 480px){
    font-size: 10pt;
  }
  &:first-child{
    border-bottom: 3px solid #fbe8b1;
    width: 10%;
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
  @media screen and (max-width : 1000px){
    font-size: 10pt;
  }
  @media screen and (max-width : 480px){
    font-size: 7pt;
  }
  margin-top: 5px;
  &:first-child{
    width: 10%;
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
    text-align:center;
  }
  &:last-child:hover{
    border: 1px solid #fbe8b1;
    background-color: #fbe8b1;
    color: black;
    border-radius: 10px;
  }
`
