import React from "react"
import { Helmet } from "react-helmet"
import  Nav from "./header"
import Footer from "./footer"


export default function Layout({children}){
    return(
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Code with Ola</title>
            </Helmet>
            <Nav></Nav>

            <div className="content">
                {children}
            </div>

            <Footer></Footer>
            
        </div>
    )
}