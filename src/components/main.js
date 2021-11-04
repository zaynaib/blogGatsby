import React from "react"
import { Helmet } from "react-helmet"
import  Nav from "./header"
import Footer from "./footer"
import "../style/mystyles.scss"
import {bodyContainer,
    footerLinksPos,
    powerpuffImg,
    coolCatsImg
  
  } from "../style/layout.module.css"



export default function Layout({children}){
    return(
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Code with Ola</title>
            </Helmet>
            <Nav></Nav>

            <div className={bodyContainer}>

                {children}
            </div>

            <Footer></Footer>
            
        </div>
    )
}