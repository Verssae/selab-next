/**@jsx jsx */
import { css, jsx } from "@emotion/core"
import Slide from "react-burger-menu/lib/menus/slide"
import Router from "next/router"
import { StyleLink } from "./Links"
import HoverMenu from "./HoverMenu"

const Burger = () => {
  return (
    <Slide
      styles={styles}
      right
      customBurgerIcon={<img src="menu.svg" />}
      customCrossIcon={<img src="cross.svg" />}
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

      {/* <Anchor url={"/courses"}>Courses</Anchor> */}
      <Anchor url={"/notices"}>Notices</Anchor>
      <Anchor url={"/gallery"}>Gallery</Anchor>
      <Anchor url={"/members"}>Members</Anchor>
      <Anchor url={"/publications"}>Publications</Anchor>
    </Slide>
  )
}

const Anchor = (props) => (
  <StyleLink
    css={css`
      display: block;
    `}
    onClick={() => Router.push(`${props.url}`)}
  >
    {props.children}
  </StyleLink>
)

var styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    right: "36px",
    top: "36px"
  },
  bmBurgerBars: {
    background: "#373a47"
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
    // height: '100%',
    top: 0,
    right: 0
  },
  bmMenu: {
    background: "#373a47",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
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
    width: "90%",
    position: "fixed",
    top: 0,
    left: 0
  }
}

export default Burger
