import React from "react"
import { Link } from "gatsby"
import "../style/mystyles.scss"
import {headerLine, headerContainer} from "../style/layout.module.css"


const Nav =() => {
  const [isActive, setisActive] = React.useState(false);

    return(
        <div className={headerContainer}>
        <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">

        <Link to="/">
             <p className={headerLine}>Hi I'm Ola</p>
        </Link>
      
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
        <div className="navbar-end">

      

          <Link className="navbar-item" to="/">
            Home
          </Link>

          <Link className="navbar-item" to="/talks/">
              Talks
          </Link>

          <Link className="navbar-item" to="/blog/">
              Blog
          </Link>

          <Link className= "navbar-item" to="/portfolio/">
            Portfolio
          </Link>
          
          <Link className= "navbar-item" to="/dataviz/">
              Data Viz
          </Link>
            
          </div>
   
        </div>
      </nav>

      </div>
    )   
}


export default Nav