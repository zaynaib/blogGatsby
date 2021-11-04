import React from "react"
import { Link } from "gatsby"
import "../style/mystyles.scss"
import {headerLine, headerContainer} from "../style/layout.module.css"


const Nav =() => {
    return(
        <div className={headerContainer}>
        <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">

        <Link to="/">
             <p className={headerLine}>Hi I'm Ola</p>
        </Link>

         
      
          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      
        <div id="navbarBasicExample" class="navbar-menu">
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