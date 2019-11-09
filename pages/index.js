import Link from 'next/link'
import theme from '../components/theme'
import React, { useState, useRef, useEffect, forwardRef, useLayoutEffect } from 'react'
import { useScrollPosition } from '../components/useScrollPosition'

const TestElement = ({ title, content, backgroundColor, callback }) => {

    const elementRef = useRef()
    useScrollPosition(({ currPos }) => {
        const ratio = currPos.y / 80 * 100
        if (ratio >= 0 && ratio <= 100) {
            console.log(title)
            callback(backgroundColor, ratio)
        }

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
    const [backgroundState, setBackgroundState] = useState({
        lastColor: theme.COLORS.BG1,
        currentColor: theme.COLORS.BG1,
        amount: "100%",
    })
    
    useScrollPosition(({prevPos, currPos}) => {
        // console.log(`${prevPos.y}->${currPos.y}`)
        const isDown = prevPos.y - currPos.y > 0
        console.log(isDown)
    })



    const changeBackgroundColor = (bgcolor, amount) => {
        console.log(`${bgcolor}, ${amount}`)
        const {currentColor, lastColor} = backgroundState
        setBackgroundState({
            lastColor: currentColor,
            currentColor: bgcolor,
            amount,
        })
    }

    


    const {currentColor, lastColor, amount} = backgroundState
    const background = `linear-gradient(${lastColor} ${amount}%,${lastColor} 0%,${currentColor} 0%, ${currentColor} ${100 - amount}%)`

    return (
        <div style={styles.container}>
            <Header background={background} amount={amount} />
            {texts.map((text, index) => <TestElement key={index} {...text} callback={changeBackgroundColor} />)}
            <style global jsx>{`
            body {
                margin: 0;
                padding: 0;
                background-color: black;
            }

            `}</style>
        </div>
    )
}
const Header = ({ background, amount }) => {

    return (
        <header style={{ ...styles.header, background }}>
            <h1 style={{margin: 0}}>SELab</h1>
            <p>This is SELAB's main page</p>
            {/* <style jsx>{`
                p{
                    background: linear-gradient( #000 ${amount}%,#000 0%,#fff 0%,#fff ${100-amount}%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    whites-space: nowrap;
                    font-size: 16px;
                    
               }
            `}
            </style> */}
        </header>
    )
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: theme.COLORS.BG1,
        ...theme.FONTS,
        color: "white",
        margin: 0,
        padding: 0,
    },
    element: {
        flex: 1,
        height: '50vh',
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
        marginTop: 0,
        overflow: 'hidden'
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
        { title: "This is Test1", content: "Hello World!", backgroundColor: theme.COLORS.BG1 },
        { title: "This is Test2", content: "Hello World!", backgroundColor: theme.COLORS.BG2 },
        { title: "This is Test3", content: "Hello World!", backgroundColor: theme.COLORS.BG1 },
        { title: "This is Test4", content: "Hello World!", backgroundColor: theme.COLORS.BG2 },
        { title: "This is Test5", content: "Hello World!", backgroundColor: theme.COLORS.BG1 },
    ]
    return { texts }
}

export default Index