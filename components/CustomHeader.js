/**@jsx jsx */
import { css, jsx } from "@emotion/core"
import styled from "@emotion/styled"
import Header from "./Header"
import { HomeLink, PostLink, StyleLink } from "./Links"
import Link from "next/link"
import Menu from "react-burger-menu/lib/menus/slide"
import BurgerIcon from "react-burger-menu"
import BurgerMenu from "react-burger-menu"
import { useState } from "react"
import theme from "./theme"

const CustomHeader = ({ refs, options }) => (
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
      <Link href="/courses">
        <Anchor>Courses</Anchor>
      </Link>
      <Link href="/notices">
        <Anchor>Notices</Anchor>
      </Link>
      <Link href="/gallery">
        <Anchor>Gallery</Anchor>
      </Link>
      <Link href="/members">
        <Anchor>Members</Anchor>
      </Link>
      <Link href="/publications">
        <Anchor>Publications</Anchor>
      </Link>
    </Menu>
  )
}

const Anchor = styled.a`
  display: block;
`

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    right: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: 'rgba(0, 0, 0, 0.3)'
  },
  bmMenuWrap: {
    position: 'fixed',
    // height: '100%',
    top: 0,
    right: 0,
    
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
    overflow: 'hidden',
  },
  bmMorphShape: {
    fill: '#373a47',
    background: "red",
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
    width: "100vw",
    position: "fixed",
    top: 0,
    left:0,
  }
}

export default CustomHeader
