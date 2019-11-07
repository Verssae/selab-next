import { StickyContainer, Sticky } from 'react-sticky';

export default () => {

    return (
        <StickyContainer style={{backgroundColor: 'red',}}>

            <Sticky >
                {({
                    style,
                    // the following are also available but unused in this example
                    isSticky,
                    wasSticky,
                    distanceFromTop,
                    distanceFromBottom,
                    calculatedHeight
                }) => (
                        <header style={style}>
                            <h1>hello</h1>
                        </header>
                    )}
            </Sticky>
           <p>asdfasdfasdf</p>
           <p>asdfasdfasdf</p>
        </StickyContainer>
    );
}
