import Header from '../components/Header'
import theme from '../components/theme'
import { useRef, forwardRef } from 'react'

const Index = () => {
    const headerStyleStart = {
        defaultBgColor: theme.COLORS.BG1,
        defaultTextColor: 'white',
        bgColor: theme.COLORS.BG2,
        textColor: 'black',
    }

    const headerStyleEnd = {
        defaultBgColor: theme.COLORS.BG2,
        defaultTextColor: 'black',
        bgColor: theme.COLORS.BG1,
        textColor: 'white',
    }

    const vanilaStart1 = useRef(null)
    const vanilaEnd1 = useRef(null)
    const vanilaStart2 = useRef(null)
    const vanilaEnd2 = useRef(null)

    const refs = [
        {
            ref: vanilaStart1,
            ...headerStyleStart,
        },
        {
            ref: vanilaEnd1,
            ...headerStyleEnd,
        },
        {
            ref: vanilaStart2,
            ...headerStyleStart,
        },
        {
            ref: vanilaEnd2,
            ...headerStyleEnd,
        },
    ]
    return (
        <div className="container">
            <Header refs={refs} >
                <p className="title">lab[se]</p>
                <p className="link"> Research</p>
            </Header>
            <div className="pages">
                <Page style={{ backgroundColor: theme.COLORS.BG1, paddingTop: 90, color: 'white' }}>
                    {`Hello, THis is first Page`}
                </Page>
                <Page ref={vanilaStart1} style={{ backgroundColor: theme.COLORS.BG2, }}>
                    {`Hello, THis is second Page`}
                </Page>
                <Page ref={vanilaEnd1} style={{ backgroundColor: theme.COLORS.BG1, color: 'white' }}>
                    {`Hello, THis is third Page`}
                </Page>
                <Page ref={vanilaStart2} style={{ backgroundColor: theme.COLORS.BG2, }}>
                    {`Hello, THis is fourth Page`}
                </Page>
                <Page ref={vanilaEnd2} style={{ backgroundColor: theme.COLORS.BG1, color: 'white' }}>
                    {`Hello, THis is fifth Page`}
                </Page>
            </div>

            <style global jsx>{`
                body {
                    margin: 0;
                    padding: 0;
                    
                }

                .title {
                    font-size: 40px;
                    font-weight: bold;
                    margin: 0;
                    margin-left: 10px;
                    display: inline-block;
                }

                .link {
                    font-size: 30px;
                    font-weight: bold;
                    margin: 0;
                    margin-left: 10px;
                    display: inline-block;
                }

                .container {
                    margin: 0;
                    padding: 0;
                    width: 100%;
                    overflow: hidden;
                }
            `}</style>
        </div >
    )
}

const Page = forwardRef(({ style, children }, ref) => (
    <div ref={ref} style={{

        width: '100%',
        height: '100vh',
        margin: 0,
        padding: 0,
        fontSize: 20,
        ...style,
    }}>
        {children}
    </div>
))



export default Index