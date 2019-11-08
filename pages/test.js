import theme from '../components/theme'

export default () => {

    return (
        <div>
            <p >
                SELABasdfasdfa
            </p>
            <style jsx>{`
                p{
                    background: linear-gradient( #000 40%,#000 0%,#fff 0%,#fff 60%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    whites-space: nowrap;
                    
               }
            `}
            </style>
            <style global jsx>{`
                body {
                    background-color: grey;
                }
            `}</style>
        </div>

    )
}


// <div style={{ width: "100%", height: 85, position: 'relative', flexDirection: 'row' }}>

//             <div style={{ height: "0%", width: "100%", backgroundColor: 'red', }}>
//             </div>
//             <div style={{ height: "100%"   , width: "100%", backgroundColor: 'blue', }}>
//             </div>


//         <div style={{ position: 'absolute', top: 0 }}>
//             <h1>asdfsadfasdf</h1>
//         </div>
//     </div>