# SELab renewal project using NEXT.js

 https://selab.hanyang.ac.kr/ page  renewal team project

[demo]( https://selab-next.tiger2714.now.sh/ )

## Members

| Name   | Role (not confirmed) |
| ------ | -------------------- |
| 주한새 | PM                   |
| 양재우 | Quiz                 |
| 김하영 | Main Pages, Slides   |
| 안한서 | Main Pages, Slides   |
| 강은호 | Quiz                 |
| 권순범 | Quiz                 |

## Installation

```bash
yarn # or npm install
yarn dev # or npm run dev (run in development)
```

## Code of Conduct

* Use functional(stateless) component only (don't use React class component!)
  * instead, use React Hooks  *ex)*  `useState, useEffect, useRef, ...`
* No semicolon in js codes
* use CSS-in-JS with [`emotion`](https://emotion.sh/docs/introduction)
* (added soon)

## emotion (css)
* Next js에 내장되어 있는 css-in-js 플러그인`styled-jsx` 대신 사용하기로 한 css-in-js 라이브러리
  
* 작성법
  
    1. 기존 css 방식 (`tagged template literal`) 이용하는 경우 (이 프로젝트에서 주로  사용하기로 한 방법)
    
       ```react
       /** @jsx jsx */
       import { css, jsx } from '@emotion/core'
       
       const color = 'darkgreen'
       const Test = () => <div
           css={css`
             background-color: hotpink;
             &:hover {
               color: ${color};
             }
           `}
         >
           This has a hotpink background.
         </div>
       ```
    
       * component에 `css` prop을 사용하기 위해서는 소스코드 상단에 `/** @jsx jsx */` 를 추가하고 `import { css, jsx } from '@emotion/core'`
       * 자기 자신 선택자 & (위 예시에선 div) 를 이용하여 `:hover`와 같은 가상 선택자나 자식 엘리먼트를 선택할 수 있다.
    
    2. Object styles 방식 (javascript 객체)을 사용하는 경우
    
       ```react
       <div
           css={{
             backgroundColor: 'hotpink',
             '&:hover': {
               color: 'lightgreen'
             }
           }}
         >
           This has a hotpink background.
         </div>
       ```
    
* composition

    * css 부분을 변수로 선언 가능하다.

      ```jsx
      const linkStyle = css`
        font-size: 20px;
        margin-left: 15px;
        margin-right: 15px;
      
        &:hover {
          text-decoration: underline solid;
          transition: 0.5s;
        }
      `
      ...
      <p css={linkStyle}>hello world</p>
      ```

    * css  변수를 가져다 사용할 수도 있다.

      ```jsx
      const titleStyle = css`
        ${linkStyle}
        font-size: 40px;
        font-weight: bold;
      
        &:hover {
          text-decoration: none;
        }
      `
      ```

* styled component

    * css를 적용시킨 컴포넌트를 반환

        ```jsx
        import styled from "@emotion/styled"
        
        const Container = styled.div`
          width: 100%;
          color: ${props => props.color}
        `
        ...
        <Container color={"red"}>{...}</Container>
        ```

    * custom component도 가능

        ```jsx
        const DarkContainer = styled(Container)`
          background-color: black;
        `
        ```

* 기타

    * global scope의 css 스타일링도 가능하다. 이 때, prop 은 css가 아닌 styles를 사용한다.

        ```jsx
        <Global
                styles={css`
                  html,
                  body {
                    margin: 0;
                    padding: 0;
                    font-family: Helvetica, Arial, sans-serif;
                    font-size: 24px;
                  }
                `}
              />
        ```

    * 이 외의 emotion 자세한 사용법은 [공식 문서](https://emotion.sh/docs) 참고.



​    

​    

## Used Packages

* [react-reveal](https://www.react-reveal.com/) : cool animation library for react project

## Reference

* [nextjs](https://nextjs.org)
* [react]( https://ko.reactjs.org/ )
* [SELab]( https://selab.hanyang.ac.kr/ )

