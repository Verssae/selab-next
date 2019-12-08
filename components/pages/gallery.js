import styled from "@emotion/styled"
import theme from "../theme"
import ContentLoader from "react-content-loader"

export const All = styled.div`
  background-color: ${theme.COLORS.sapphire};
  /* margin-top: 10%;
  margin-bottom: 10%; */
  display: flex;
  justify-content: center;
  margin-top: 90px;
`

export const ImageBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px;
  width: 100%;
  height: 90vh;
  overflow: scroll;
  border-left: ${theme.COLORS.vanila} solid;
  padding-left: 50px;
`
export const Image = styled.div`
  width: 250px;
  padding: 5px;
  text-align: center;
  color: white;
  font-size: 10pt;

  &:hover {
    border: 3px solid ${theme.COLORS.vanila};
    background-color: ${theme.COLORS.vanila};
    color: black;
    border-radius: 5px;
  }

  & img {
    width: 250px;
    height: 180px;
    padding-bottom: 3px;
  }
`
export const Nav = styled.div`
  display: flex;
  font-size: 13pt;
  align-self: center;
  flex-direction: column;
  padding-right: 30px;
  
`

export const NavAnchor = styled.a`
  padding: 5px;
  margin: 10px;
  margin-bottom: 30px;
  margin-top: 30px;
  color: white;
  text-decoration: none;
  color: ${(props) => (props.isCurrent ? theme.COLORS.vanila : "")};

  & a:hover {
    font-weight: bold;
    color: ${theme.COLORS.vanila};
  }
`
export const Loader = () => (
  <ContentLoader
    height={475}
    width={250}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <rect x="0" y="70" rx="5" ry="5" width="250" height="180" />
    <rect x="75" y="13" rx="4" ry="4" width="100" height="13" />
    <rect x="75" y="37" rx="4" ry="4" width="50" height="8" />
  </ContentLoader>
)
