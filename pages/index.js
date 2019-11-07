import Link from 'next/link'
import theme from '../components/theme'
import React, { useState, useRef, useEffect, forwardRef, useLayoutEffect } from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

const TestElement = ({ title, content, backgroundColor, callback }) => {

    const elementRef = useRef()
    useScrollPosition(({ currPos }) => {
        
        if (currPos.y <= 85 && currPos.y >= 0) {
            console.log(title)
        }
        callback(backgroundColor, currPos.y / 85 * 100)
    }, [], elementRef)

    return (

        <div ref={elementRef} style={{ ...styles.element, backgroundColor, }}>

            <p style={{ flex: 1 }}>{title}</p>
            <p style={{ flex: 1 }}>{content}</p>
        </div>


    )
}

const Index = (props) => {
    const { texts } = props
    const [colorConfig, setColorConfig] = useState({
        currentColor: theme.COLORS.BG1,
        nextColor: theme.COLORS.BG1,
        amount: 0,
    })



    const changeBackgroundColor = ({ nextColor, amount }) => {
        console.log(nextColor)
        if (amount <= 0) {
            setColorConfig(nextColor)
        }
    }

    
    const {currentColor, nextColor, amount} = colorConfig
    const background = `linear-gradient(${currentColor} ${amount}%, ${nextColor} ${100 - amount}%)`

    return (
        <div style={styles.container}>
            <Header  background={background}/>
            {texts.map((text, index) => <TestElement key={index} {...text} callback={changeBackgroundColor}/>)}
            <style global jsx>{`
            body {
                margin: 0;
                padding: 0;
            }
            `}</style>
        </div>
    )
}

const Header = ({background}) => {
    return (
        <header style={{ ...styles.header, background }}>
            <h1>SELab</h1>
            <p>{`This is SELAB's main page`}</p>
        </header>
    )
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: theme.COLORS.BG1,
        ...theme.FONTS,
        color: "white",
    },
    element: {
        flex: 1,
        height: '30vh',
        backgroundColor: 'white',
        color: 'black',
        textAlign: "center",
        paddingTop: '10vh',
    },
    header: {
        position: '-webkit-sticky',
        position: 'sticky',
        top: 0,
        width: "100%",
        background: 'linear-gradient( #FFC0CB 50%, #00FFFF 50%)',
        margin: 0,

    }
}

Index.getInitialProps = async ({ req }) => {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    console.log(userAgent)
    const texts = [
        { title: "This is Test1", content: "Hello World!", backgroundColor: theme.COLORS.BG1 },
        { title: "This is Test2", content: "Hello World!", backgroundColor: theme.COLORS.BG2 },
        { title: "This is Test3", content: "Hello World!", backgroundColor: theme.COLORS.BG1 },
        { title: "This is Test4", content: "Hello World!", backgroundColor: theme.COLORS.BG2 },
        { title: "This is Test5", content: "Hello World!", backgroundColor: theme.COLORS.BG1 },
    ]
    return { texts }
}

export default Index