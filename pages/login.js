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
  height: 500px;
  margin: auto;
  margin-top: 200px;
  background: ${theme.COLORS.sapphire};
  border-radius: 7px;
  box-shadow: 0px 0px 5px 0.5px #d0d3d4;
  text-align: center;
  color: white;
  padding: 10px;
  & button {
    width: 100px;
    height: 50px;
    border-radius: 7px;
    margin: 10px;
  }

  & button:hover {
    opacity: 0.8;
  }
`

const Input = styled.input`
  margin: auto;
  margin-bottom: 10px;
  width: 300px;
  display: block;
  height: 30px;
`

const Login = () => {
  const [state, setState] = useState(false)
  const id = useRef()
  const pw = useRef()
  const login = () => {
    let idValue = id.current.value
    let pwValue = pw.current.value
    console.log(idValue)
    console.log(pwValue)
    let filtered = userInfo.filter(
      ({ id, password }) => idValue == id && pwValue == password
    )
    if (filtered.length > 0) {
      console.log("login!")
      sessionStorage.setItem("loginUser", idValue)
      setState(true)
    }
  }
  const logout = () => {
    sessionStorage.removeItem("loginUser")
    setState(false)
  }

  useEffect(() => {
    if (sessionStorage.getItem("loginUser")) {
      setState(true)
    }
  }, [])
  return (
    <Container>
      <h1>Admin Login</h1>

      {state ? (
        <div>
          <p>{sessionStorage.getItem("loginUser")} is logined.</p>
          <button onClick={logout}>logout</button>
        </div>
      ) : (
        <div>
          <Input type="text" ref={id} placeholder={"ID"} />
          <Input type="password" ref={pw} placeholder={"PASSWORD"} />
          <button onClick={login}>login</button>
        </div>
      )}
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
