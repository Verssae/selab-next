/**@jsx jsx */
import { jsx, css, Global } from "@emotion/core"
import styled from "@emotion/styled"

export default () => {
    return (
        <div>
            <Global styles={css`
            .scroll {
                display: inline-block;
                width: 90vw;
                height: 100vw;
                overflow: auto;
                padding: 0 4px;
                vertical-align: middle;
                border: 4px solid #000;
              }
              .parent {
                min-height: 90vh;
                height: 200vh;
                margin: 4px 0;
                border: 4px solid #666;
                position: relative;

              }
              .static {
                  position: absolute;
                  right: 0;
                  width: 60%;
                  height: 90vh;
                  top: 0;
                  background: gray;
              }
              @supports (position: sticky) or (position: -webkit-sticky) {
                .sticky {
                    position: -webkit-sticky; /* 사파리 브라우저 지원 */
                    position: sticky;
                    top: 150px;
                    background: red;
                    width: 40%;
                    height: 50vh;
                }
              }
              .fixed {
                  position: fixed;
                  top: 0px;
                  left: 0px;
                  background: blue;
                  width: 100%;
                  height: 90px;
                  z-index: 100;
              }
              body {
                color: #fff;
                background-image: linear-gradient(#fff 12px, #eee 12px, #eee 24px);
                background-size: 100% 24px;
              }
            `} />
            <div className="scroll">
                <div className="fixed">.fixed</div>
                <div className="parent">
                    <div className="static">.static</div>
                </div>

                <Wrapper num={3}> 

                    <Sticky>sticky</Sticky>
                    <Right num={0}>asdfasfdasdfasdf</Right>
                    <Right num={1}>asdfasfdasdfasdf</Right>
                    <Right num={2}>asdfasfdasdfasdf</Right>
                    
                    
                </Wrapper>
                <div className="parent">
                    <div className="static">.static</div>
                </div>
                <br />
                <br />
                <br />
                <br />
            </div>
            <b className="sticky">.sticky</b>

        </div>
    )
}

const Right = styled.div`
    position: absolute;
    right: 0;
    width: 60%;
    height: 90vh;
    top: ${props => props.num * 90}vh;
    background: gray;
`

const Sticky = styled.div`
@supports (position: sticky) or (position: -webkit-sticky) {
    & {
        position: -webkit-sticky; /* 사파리 브라우저 지원 */
        position: sticky;
        top: 150px;
        background: red;
        width: 40%;
        height: 50vh;
    }
  }
`

const Wrapper = styled.div`
    position: relative;
    height: ${props => props.num * 90}vh;
`