import styled from "@emotion/styled"
import theme from "../theme"

export const All = styled.div`
  background-color: ${theme.COLORS.sapphire};
  /* margin-top: 10%;
  margin-bottom: 10%; */
  /* display: flex;
  justify-content: center; */
  margin-top: 90px;
  margin-right: 3%;
  margin-left: 3%;
  padding: 3%;
`

export const Bigtitle = styled.div`
  color: ${theme.COLORS.vanila};
  margin-bottom: 3%;
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  color: white;
  font-size: 13pt;
  @media screen and (max-width: 1000px) {
    font-size: 10pt;
  }
  @media screen and (max-width: 650px) {
    font-size: 8pt;
  }
  @media screen and (max-width: 480px) {
    font-size: 6pt;
  }
  margin-top: 3%;
  & div:first-child {
    /* border: ; */
  }
`
export const Smallmenu = styled.div`
  display: inline-flex;
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 2px;

  & div {
    display: flex;
  }
  & div:first-child {
    width: 40%;
  }
  & div:nth-child(2) {
    width: 30%;
  }
`
export const List = styled.div`
  display: inline-flex;
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 4px;

  & div {
    display: flex;
  }
  & div:first-child {
    width: 40%;
  }
  & div:nth-child(2) {
    width: 30%;
  }
  &:hover {
    background-color: ${theme.COLORS.vanila};
    border-radius: 7px;
    color: black;
  }
`
