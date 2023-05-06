import React from "react"
import Trollface from "../images/troll-face.png"
export default function Header(){
    return (
        <div className="header--container">
          <div className="icon--text">
            <div className="nav--img--container">
            <img src={Trollface} alt = "troll face"/>
            </div>
             <h1 style={{fontSize:"20.75px"}}>Meme Generator</h1>
          </div>
          <div>
            <p>React Course - project 3</p>
          </div>
        </div>
    )
}