import styled from "@emotion/styled"
import theme from "../theme"
import ContentLoader from "react-content-loader"

export const Contents = styled.div`
  background-color: ${theme.COLORS.sapphire};
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-top: 100px;
  font-size: 16px;
`
export const Prof = styled.div`
  display: flex;
  flex-flow: column;
  padding: 20px;
  border: 3px solid ${theme.COLORS.vanila};
  border-radius: 10px;
  color: white;

  & h1{
    margin: 2px;
    margin-bottom: 10px;
  }
  & img{
    width: 150px;
    height: 180px;
  }
  & p{margin: 2px;}
`

export const Subject = styled.div`
  display: flex;
`
export const Career = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 60%;
`
export const P_info = styled.div`
  width: 40%;
`
export const Pupils = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`
export const Nav = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  border-right: 3px solid ${theme.COLORS.vanila};
  margin-left: 20px;
  padding-left: 80px;
  padding-right: 50px;
  font-size: 15pt;
`
export const NavP = styled.a`
  margin: 10px;
  text-decoration: none;
  color: ${(props) => (props.isCurrent ? theme.COLORS.vanila : "white")};

  &:hover {
    color: ${theme.COLORS.vanila};
  }
`
export const Members_section = styled.div`
  display: flex;
  flex-flow: column;
  overflow-y: scroll;
  height: 600px;
  margin: 50px;
  width: 70%;
`
export const Member = styled.div`
  display: flex;
  margin: 10px;
  color: white;
  border: 3px ${theme.COLORS.vanila} solid;
  padding: 20px;
  border-radius: 20px;

  & img{
    width: 150px;
    height: 180px;
    border: 1px solid;
  }
  & a{
    text-decoration: none;
    color: white;
    font-weight: bold;
  }
`
export const Research_interests = styled.div`
  width: 30%;
  margin-left: 30px;
`

export const Name = styled.li`
  font-weight: bold;
  font-size: x-large;
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
