import { jsx, css, Global } from "@emotion/core"
import { useState } from "react"
import styled from "@emotion/styled"
import theme from "./theme"

const sidestyle ={
    position: "fixed",
    textAlign: "center",
    fontSize: "0.7em",
    backgroundColor: "#000000",
    color: "#AAAABB",
    width: "100px",
    height : "100px",
    right : "50px",
    bottom: "100px",
    zIndex: "30"
}

const sidewindowstyle ={
    position: "fixed",
    textAlign: "center",
    fontSize: "0.7em",
    backgroundColor: "#000000",
    color: "#AAAABB",
    width: "300px",
    height : "500px",
    right : "50px",
    bottom: "120px",
    zIndex: "35"
}

const Side = ({name, link}) => {
    
    return(
        <div style = {sidestyle} >
            {name}
        </div>
    )
}

export default Side