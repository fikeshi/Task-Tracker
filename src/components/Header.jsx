import { useState } from "react"
import Button from "./Button"
import { useLocation } from "react-router-dom"

function Header({onAdd, showAdd}) {

    const location = useLocation()
    

    return (
        <header className="header">
            <h1>Task Tracker</h1>
            
            {location.pathname === "/" && <Button color={showAdd ? "red" : "green"} text={showAdd ? "Close" : "Add"} onClick={onAdd} />}
        </header>

        // color = "green" text = "ADD"
    )
}

export default Header