/** @jsx jsx */

import { useEffect, useState } from "react"
import styled from "@emotion/styled"
import { jsx } from "@emotion/core"
import theme from "./theme"

const Header = ({ refs, options, children }) => {
    const { headerHeight } = options

    const [styles, setStyles] = useState({
        ...refs[0],
        top: headerHeight
    })

    const onPercentChange = () => {
        let belows = refs.filter(
            ({ ref }) => ref && ref.current.getBoundingClientRect().top >= -100
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
            <Block
                bgColor={styles.defaultBgColor}
                color={styles.defaultTextColor}
            >
                <HeaderContent>{children}</HeaderContent>
            </Block>
            <BlockClone
                color={styles.textColor}
                bgColor={styles.bgColor}
                clip={styles.top}
            >
                <HeaderContent>{children}</HeaderContent>
            </BlockClone>
        </Container>
    )
}
const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: ${(props) => props.height}px;
    /* overflow: hidden; */
    z-index: 100;
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
    padding-left: 4vw;
    padding-right: 4vw;
`

const BlockClone = styled(Block)`
    clip-path: inset(${(props) => props.clip}px 0 0 0);
`
const HeaderContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    @media screen and (min-width: 1440px) {
        width: 1440px;
        margin: auto;
    }
`

Header.defaultProps = {
    refs: [{
        defaultBgColor: theme.COLORS.sapphire,
        defaultTextColor: "white",
        bgColor: theme.COLORS.sapphire,
        textColor: "white"
    }],
    options: { headerHeight: 90 }
}

export default Header
