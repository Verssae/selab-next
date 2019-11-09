import theme from '../components/theme'
import { useState, useEffect, useRef } from 'react'
import { useScrollPosition } from '../components/useScrollPosition'
export default function Index() {
    const ref = useRef();
    const [percent, setPercent] = useState(100)
    const [percent2, setPercent2] = useState(90)
    const onPercentChange = (percent, callback) => {
        if (percent <= 5) {
            callback(0)
        } else {
            callback(percent)
        }
        
        
        
    }

    // const handleScroll = (e) => {
    //     console.log('handleScroll')


    //     let h = ref.current.clientHeight
    //     console.log((window.scrollY - 64) / 24 * 100)
    //     if (window.scrollY >= 64 && window.scrollY <= 88) {
    //         onPercentChange((window.scrollY - 64) / 24 * 100)
    //     }
    // }

    // useEffect(() => {
    //     console.log('use effect')
    //     window.addEventListener('scroll',handleScroll)
    //     return () => window.removeEventListener('scroll', handleScroll)
    // },[])


    useScrollPosition(({ prevPos, currPos }) => {
        console.log(90-currPos.y)
        // if (currPos.y <= 36 && currPos.y >= 0) {
        //     onPercentChange(currPos.y / (36) * 100, setPercent)
        // }
        if (currPos.y <= 90 && currPos.y >= 0) {
            onPercentChange(currPos.y , setPercent2)
        }
    }, [percent, percent2], ref)
    return (
        <div className="container">
            <header>
                <div className="header-content">
                    <div className="block">
                        <div className="inner">
                            <p>SELAB</p>
                        </div>

                    </div>
                    <div className="block-clone">
                    <div className="inner">
                            <p>SELAB</p>
                        </div>
                    </div>
                </div>

            </header>


            <div className="page">
                <p>content</p>
            </div>
            <div ref={ref} className="page vanila">
                <p>content</p>
                <p>content</p>
                <p>content</p>
            </div>
            <div className="page">
                <p>content</p>
                
            </div>
            <div className="page">
                <p>content</p>
                
            </div>
            <style global jsx>{`
                body {
                    margin: 0;
                }
            `}</style>

            <style jsx>{`
                .container {
                    background-color: ${theme.COLORS.BG1};
                    width: 100%;
                    height: 100vh;
                    font-size: 20px;
                }

                header {
                    position: -webkit-sticky;
                    position: sticky;
                    top: 0;
                    width: 100%;
                    height: 90px;
                    margin: 0;
                }

                .header-content {
                    position: relative;
                }
                .block, .block-clone {
                    width: 100%;
                    position: absolute;
                    overflow: hidden;
                    height: 90px;
                }

                .block {
                    overflow: auto;
                    background-color: ${theme.COLORS.BG1};
                }

                .block-clone {
                    overflow: auto;
                    background-color: ${theme.COLORS.BG2};
                    clip-path: inset(${percent2}px 0 0 0);
                }
                
               

                p {
                    margin: 0;
                }

                header p {
                    font-size: 30px;
                    font-weight: bold;
                    color: 'white'
                }
                .block > p, .block-clone > p {
                    margin: 0;
                    padding: 0;
                }

                .block  p {
                    color: white;
                }

                .block-clone  p {
                    color: black;
                    clip-path: inset(${percent2}px 0 0 0);
                }

                .inner {
                    overflow: auto;
                }

                .page {
                    width: 100%;
                    height: 50vh;
                    background-color: ${theme.COLORS.BG1};
                    margin: 0;
                }
                .vanila {
                    background-color: ${theme.COLORS.BG2};
                }

                
            `}</style>
        </div>
    )
}