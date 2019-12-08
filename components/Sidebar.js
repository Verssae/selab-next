import { useEffect, useState } from "react"
import styled from "@emotion/styled"
import { jsx } from "@emotion/core"
import theme from "./theme"
import Side from "./Side"

const sidebarstyle = {
    position: "fixed",
    textAlign: "center",
    fontSize: "0.7em",
    //backgroundColor: "#000000",
    color: "#AAAABB",
    width: "100px",
    height : "1000px",
    right : "0px",
    top: "100px",
    zIndex: "25",

}
const sidewindowstyle ={
    position: "fixed",
    textAlign: "center",
    fontSize: "0.7em",
    backgroundColor: "#F0F0F0",
    color: "#AAAABB",
    width: "300px",
    height : "500px",
    right : "50px",
    bottom: "200px",
    zIndex: "35"
}

const Sidebar = ({names, links}) => {
    const [isOpen, setIsOpen] = useState(false)
    const onClickHandler = (id) => {
      callback(id)
    }
    return(
        <div style = {sidebarstyle} onClick={() => setIsOpen(!isOpen)}>
            <Side name = {names} link = {links}></Side>
            {isOpen
                ? (<div style = {sidewindowstyle}></div>)
                : ""}
        </div>
    )
}

export default Sidebar