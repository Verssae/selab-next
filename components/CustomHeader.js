/**@jsx jsx */
import { css, jsx } from "@emotion/core"
import styled from "@emotion/styled"
import Header from "./Header"
import { HomeLink, StyleLink } from "./Links"
import Link from "next/link"
import Menu from "react-burger-menu/lib/menus/slide"
import Router from 'next/router'


const CustomHeader = ({ refs, options }) => {
  return (
    <Header refs={refs} options={options}>
      <HomeLink />
      <Link href="/courses">
        <StyleLink>Courses</StyleLink>
      </Link>
      <Link href="/notices">
        <StyleLink>Notices</StyleLink>
      </Link>
      <Link href="/gallery">
        <StyleLink>Gallery</StyleLink>
      </Link>
      <Link href="/members">
        <StyleLink>Members</StyleLink>
      </Link>
      <Link href="/publications">
        <StyleLink>Publications</StyleLink>
      </Link>
      <Burger />
    </Header>
  )
}

const Burger = () => {
  return (
    <Menu
      styles={styles}
      right
      // pageWrapId={"page-wrap"}
      // outerContainerId={"outer-container"}
      customBurgerIcon={<img src="menu.svg" />}
      customCrossIcon={<img src="cross.svg" />}
    >
      
        <Anchor url={"/"} >Home</Anchor>

  
        <Anchor url={"courses"} >Courses</Anchor>
     
        <Anchor url={"/notices"} >Notices</Anchor>
     
        <Anchor url={"/gallery"} >Gallery</Anchor>
     
        <Anchor url={"/members"} >Members</Anchor>
     
        <Anchor url={"/publications"} >Publications</Anchor>
    </Menu>
  )
}


const Anchor = (props) => (
  <a css={css`display:block;`} onClick={() => Router.push(`${props.url}`)}>
    {props.children}
  </a>
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
    width: "100vw",
    position: "fixed",
    top: 0,
    left: 0
  }
}

export default CustomHeader
