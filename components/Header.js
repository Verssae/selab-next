/** @jsx jsx */

import { useEffect, useState } from "react"
import styled from "@emotion/styled"
import { jsx, css, Global } from "@emotion/core"
import { Content } from "./CSS/index"

const Header = ({ refs, options, children }) => {
  const { headerHeight } = options

  const [styles, setStyles] = useState({
    ...refs[0],
    top: headerHeight
  })

  const onPercentChange = () => {
    let belows = refs.filter(
      ({ ref }) => ref.current.getBoundingClientRect().top >= -100
    )
    if (belows.length > 0) {
      let el = belows[0]
      let { top } = el.ref.current.getBoundingClientRect()
      setStyles({
        top,
        ...el
      })
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", onPercentChange)
    return () => window.removeEventListener("scroll", onPercentChange)
  }, [styles])

  return (
    <Container height={headerHeight}>
      <Content>
        <Block bgColor={styles.defaultBgColor} color={styles.defaultTextColor}>
          {children}
        </Block>
        <BlockClone
          color={styles.textColor}
          bgColor={styles.bgColor}
          clip={styles.top}
        >
          {children}
        </BlockClone>
      </Content>
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${(props) => props.height}px;
  overflow: hidden;
`

const Block = styled.div`
  width: 100%;
  position: absolute;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 99%;
  padding-left: 60px;
  padding-right: 60px;
`

const BlockClone = styled(Block)`
  clip-path: inset(${(props) => props.clip}px 0 0 0);
`

Header.defaultProps = {
  options: { headerHeight: 90 }
}

export default Header
