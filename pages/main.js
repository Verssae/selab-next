import theme from '../components/theme'
import React, { useState, useRef, useEffect, forwardRef } from 'react'
import ScrollCollision from '../components/reactScrollCollision';


const App = () => (
    <div>
        <div className="container" >
            <ScrollCollision className="Elem1">Scroll Down</ScrollCollision>
            <ScrollCollision className="Elem3">Scroll Down</ScrollCollision>

        </div>

        <div className="Block-White">

        </div>
        <div className="Block-Black" data-clippath="ColorWhite">
            <p>asdfasdfasdfasdfasfasfadf</p>
        </div>
        <div className="Block-White">

        </div>
        <div className="Block-Black" data-clippath="ColorWhite">

        </div>

        <div className="Block-White">

        </div>
        <style global jsx>{`
            
            .Block-White,
            .Block-Black {
              width: 100%;
              height: 50vh;
            }

            p {
                margin: 0;
            }

            .container {
                oveflow: hidden;
                position: fixed;
                top: 0%;
                width: 100%;
            }
            
            .Block-White {
              background: ${theme.COLORS.BG2};
            }
            
            .Block-Black {
              background: ${theme.COLORS.BG1};
            }
            
            .ColorWhite{
              color: white;
              fill: white;
            }

            .ColorTransparent {
              color: 
            }
            
            .ColorGray{
              background-color: lightgray;
            //   fill:gray;
            }
            
            .Elem1 {
                position: fixed;
                top: 0%;
                left: 50%
              height: 20px;
              width: 300px;
            }
            
            .Elem2 {
              transform: translateX(-50%);
              height: 17px;
              width: 150px;
            }
            
            .Elem3 {
                position: fixed;
                top: 0%;
                left: 20%;
              height: 20px;
              width: 150px;
            }
            
            .ElemSVG {
              position: fixed;
              top: 30%;
              left: 50%;
              transform: translateX(-50%);
              height: 100px;
              width: 100px;
            }

            .ElemSVG svg{
                position: absolute;
                top: -33px;
                left: -33px;
            }
            
            .ElemSVG svg path{
                stroke: #fff;
                stroke-width: 6px;
                stroke-linecap: round;
                fill: transparent;
            }
                    `}
        </style>
    </div>
);


export default App