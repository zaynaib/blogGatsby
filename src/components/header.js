import React from "react"
import "../style/mystyles.scss"
import {container} from "../style/layout.module.css"

const Nav =() => {
    return(
        <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"></img>
          </a>
      
          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      
        <div id="navbarBasicExample" class="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item">
              Home
            </a>
      
            <a className="navbar-item">
              Talks
            </a>

            <a className="navbar-item">
              Blog
            </a>

            <a className="navbar-item">
              Portfolio
            </a>

            <a className="navbar-item">
              Data Viz
            </a>
      
           
            
          </div>
   
        </div>
      </nav>
    )   
}


export default Nav