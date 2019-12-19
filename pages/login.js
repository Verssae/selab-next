/**@jsx jsx */
import styled from "@emotion/styled"
import { css, jsx } from "@emotion/core"

import Layout from "../components/Layout"
import CustomHeader from "../components/CustomHeader"
import theme from "../components/theme"
import { useState, useEffect, useRef, forwardRef } from "react"

const userInfo = [
  {
    id: "hansae",
    password: "1234"
  },
  {
      id: "onnoo",
      password: "1111"
  }
]

const Container = styled.div`
  width: 500px;
  height: 600px;
  margin: auto;
  margin-top: 100px;
  background: white;
  border-radius: 7px;
  box-shadow: " 0px 0px 5px 0.5px #D0D3D4";
  text-align: center;
`

const InputContainer = styled.div`
  margin: auto;
  text-align: left;
  & label {
    font-size: 12pt;
  }
  & input {
  }
`
const Input = forwardRef(({ label }, ref) => (
  <InputContainer>
    <label>
      {label}
      <input ref={ref} type="text" />
    </label>
  </InputContainer>
))
const Login = () => {
  const [state, setState] = useState(false)
  const id = useRef()
  const pw = useRef()
  const login = () => {
    let idValue = id.current.value
    let pwValue = pw.current.value
    console.log(idValue)
    console.log(pwValue)
    let filtered = userInfo.filter(({id, password})=> idValue == id && pwValue == password)
    if (filtered.length > 0) {
      console.log("login!")
      sessionStorage.setItem("loginUser", idValue)
      setState(true)
    }
  }

  useEffect(() => {
    if (sessionStorage.getItem("loginUser")) {
      setState(true)
    }
  }, [])
  return (
    <Container>
      <h1>Login</h1>
      <Input ref={id} label={"ID"} />
      <Input ref={pw} label={"PASSWORD"} />
      <button onClick={login}>login</button>
      <p>{state ? "is logined" : "need to login"}</p>
    </Container>
  )
}

export default function() {
  return (
    <Layout
      styles={css`
        background: ${theme.COLORS.vanila};
      `}
    >
      <CustomHeader
        refs={[
          {
            defaultBgColor: theme.COLORS.vanila,
            defaultTextColor: "black",
            bgColor: theme.COLORS.vanila,
            textColor: "black"
          }
        ]}
      />
      <Login />
    </Layout>
  )
}
