import styled from "@emotion/styled"
import theme from "../theme"

export const Whole = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 90px;
  background-color: ${theme.COLORS.sapphire};
`
export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  color: white;
  margin: 30px;
`
export const LeftP = styled.p`
  &:hover {
    color: ${theme.COLORS.vanila};
    font-weight: bold;
  }
  color: ${(props) => (props.isCurrent ? theme.COLORS.vanila: "")};
`

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  border-left: solid ${theme.COLORS.vanila};
  padding-left: 50px;
  overflow-y: scroll;
  height: 700px;
  &::-webkit-scrollbar {
    display: none;
  }
  & a {
    margin-bottom: 10px;
    color: white;
    text-decoration: none;
    font-size: 12pt;
    padding: 10px;
  }
  & a:hover {
    font-weight: bold;
    background-color: ${theme.COLORS.vanila};
    color: black;
    border-radius: 15px;
  }
`