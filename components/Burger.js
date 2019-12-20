/**@jsx jsx */
import { css, jsx } from "@emotion/core"
import Slide from "react-burger-menu/lib/menus/slide"
import Router from "next/router"
import { linkStyle } from "./Links"
import HoverMenu from "./HoverMenu"
import styled from "@emotion/styled"

const Burger = ({isSlide=false}) => {
  return (
    <MenuWrap isSlide={isSlide}>
      <Slide
        styles={styles}
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
      >
        <Anchor url={"/"}>Home</Anchor>
        <HoverMenu isBurger={true} title={"Courses"}>
          <ul>
            <li>
              <Anchor url={"/incourse"}>{"CSE326 WebAppDev"}</Anchor>
            </li>
            <li>
              <Anchor url={"/course"}>
                {"CSE6050 Advanced Software Engineering"}
              </Anchor>
            </li>
          </ul>
        </HoverMenu>

        <Anchor url={"/notices"}>Notices</Anchor>
        <Anchor url={"/gallery"}>Gallery</Anchor>
        <Anchor url={"/members"}>Members</Anchor>
        <Anchor url={"/publications"}>Publications</Anchor>
        <Anchor url={"/login"}>Login</Anchor>
      </Slide>
    </MenuWrap>
  )
}
const MenuWrap = styled.div`

  @media screen and (min-width: 1061px) {
    ${props => props.isSlide ? "" :"display: none;" }
  }
`

const Anchor = (props) => (
  <a
    css={css`
    ${linkStyle}
      display: block;
    `}
    onClick={() => Router.push(`${props.url}`)}
  >
    {props.children}
  </a>
)

var styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    left: "10px",
    top: "18px"
  },
  bmBurgerBars: {
    background: "#fff"
  },
  bmBurgerBarsHover: {
    background: "#a90000"
  },
  bmCrossButton: {
    height: "24px",
    width: "24px"
  },
  bmCross: {
    background: "rgba(0, 0, 0, 0.3)"
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
    top: 0,
    left: 0
  },
  bmMenu: {
    background: "#373a47",
    padding: "2.5em 1.5em 0",
    overflow: "hidden"
  },
  bmMorphShape: {
    fill: "#373a47",
    background: "red"
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em"
  },
  bmItem: {
    display: "inline-block"
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
    width: "100%",
    position: "fixed",
    top: 0,
    left: 0
  }
}

export default Burger
