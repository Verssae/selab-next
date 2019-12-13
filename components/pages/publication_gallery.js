import styled from "@emotion/styled"
import theme from "../theme"

export const All = styled.div`
  background-color: ${theme.COLORS.sapphire};
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 90px;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 10%;
`
export const PublicationBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1%;
  border-top: solid ${theme.COLORS.vanila};
  & a {
    margin-bottom: 10px;
    color: white;
    text-decoration: none;
    text-align: justify;
    padding: 10px;
    font-size: 13pt;
    @media screen and (max-width: 480px) {
      font-size: 7pt;
    }
    @media screen and (min-width:480px) and (max-width:1000px) {
      font-size: 11pt;
    }
  }
  & a:hover {
    font-weight: bold;
    background-color: ${theme.COLORS.vanila};
    color: black;
    border-radius: 15px;
  }
`

export const ImageBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px;
  width: 100%;
  height: 90vh;
  border-top: ${theme.COLORS.vanila} solid;
`
export const Image = styled.div`
  width: 250px;
  font-size: 10pt;
  @media screen and (max-width:480px) {
    width: 125px;
    font-size: 8pt;
  }
  padding: 5px;
  text-align: center;
  color: white;

  &:hover {
    border: 3px solid ${theme.COLORS.vanila};
    background-color: ${theme.COLORS.vanila};
    color: black;
    border-radius: 5px;
  }

  & img {
    width: 250px;
    height: 180px;
    @media screen and (max-width:480px) {
      width: 125px;
      height: 90px;
    }
    padding-bottom: 3px;
  }
`
export const Nav = styled.div`
  display: flex;
  font-size: 13pt;
  justify-content: center;
  @media screen and (max-width: 480px) {
    font-size: 7pt;
  }
  @media screen and (min-width:480px) and (max-width:1000px) {
    font-size: 10pt;
  }
`

export const NavAnchor = styled.a`
  padding: 10px;
  color: white;
  text-decoration: none;
  color: ${(props) => (props.isCurrent ? theme.COLORS.vanila : "")};

  & a:hover {
    font-weight: bold;
    color: ${theme.COLORS.vanila};
  }
`
