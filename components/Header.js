import { useEffect, useState } from 'react'

const Header = ({ refs, options, children }) => {

    const { headerHeight } = options
    console.log(refs)

    const [styles, setStyles] = useState({
        ...refs[0],
        top: headerHeight
    })

    const onPercentChange = () => {
        let belows = refs.filter(({ ref }) => ref.current.getBoundingClientRect().top >= -100)
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
        window.addEventListener('scroll', onPercentChange)
        return () => window.removeEventListener('scroll', onPercentChange)
    }, [styles])

    return (
        <div>
            <header>
                <div className="block">
                    <div>
                        {children}
                    </div>
                </div>
                <div className="block-clone">
                    <div>
                        {children}
                    </div>
                </div>
            </header>

            <style jsx>{`
                
                header {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: ${headerHeight}px;
                    margin: 0;
                    overflow: hidden;
                }

                .block, .block-clone {
                    width: 100%;
                    position: absolute;
                    height: ${headerHeight}px;
                }

                .block {
                    background-color: ${styles.defaultBgColor};
                }

                .block-clone {
                    background-color: ${styles.bgColor};
                    clip-path: inset(${styles.top}px 0 0 0);
                }


                .block  > div {
                    color: ${styles.defaultTextColor};
                }

                .block-clone  > div {
                    color: ${styles.textColor};
                    clip-path: inset(${styles.top}px 0 0 0);
                }
                
            `}</style>
        </div>
    )
}

Header.defaultProps = {
    options : { headerHeight: 90 }
}

export default Header