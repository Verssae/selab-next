import styled from "@emotion/styled"
import theme from "../theme"

export const Body=styled.body`
    margin-top:90px;
`

export const Nav=styled.div`
    font-size: 11pt;
    overflow: hidden;
    color:white;
    margin:0;
    padding-right:50px;
    & p{
        float: right;
        margin:10px;
    }
    & p:hover{
        font-weight:bold;
        color:${theme.COLORS.vanila}
    }
`

export const Whole=styled.div`
    display:flex;
    margin-left:3.7%;
    margin-right:3.7%;
    justify-content: space-between;
`

export const Left=styled.div`
    display: flex;
    flex-direction: column;
    border-right:solid;
    justify-content: center;
    color:${theme.COLORS.vanila};
    width:18%;
    margin-right:5%;
    font-size:13pt;
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
`
export const Right=styled.div`
    display: flex;
    flex-direction: column;
    overflow: scroll;
    overflow-x:hidden;
    padding:2%;
    height: 500px;
    color:white;
    font-size : 12pt;
    &::-webkit-scrollbar{
        overflow-y:hidden;
    }
    & h3{
        color:#fbe8b1 ;
        font-size:15pt;
    }
`
