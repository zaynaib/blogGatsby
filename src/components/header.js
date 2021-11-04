import React from "react"
import { Link } from "gatsby"
import "../style/mystyles.scss"
import {headerLine, headerContainer} from "../style/layout.module.css"


const Nav =() => {
  const [isActive, setisActive] = React.useState(false);


    return(
        <div className={headerContainer}>
        <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">

        

          <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"></img>
          </a>
      
          <a
          onClick={() => {
            setisActive(!isActive);
          }}
          role="button"
          className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
        </div>
      
        <div id="navbarBasicExample"  className={`navbar-menu ${isActive ? "is-active" : ""}`}
        
        >
          <div class="navbar-start">
            <a class="navbar-item">
              Home
            </a>
      
            <a class="navbar-item">
              Documentation
            </a>
      
      
          </div>
      
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a class="button is-light">
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      </div>
    )   
}


export default Nav