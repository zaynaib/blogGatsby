import React from "react"
import "../style/mystyles.scss"
import {footerLinksPos} from "../style/layout.module.css"




export default function Footer() {
    return (
        <footer class="is-flex is-justify-content-center">
        <a className={footerLinksPos} href="https://github.com/zaynaib">Github</a>
        <a className={footerLinksPos} href="https://twitter.com/AmazingSpeciali">Twitter</a>
        <a className={footerLinksPos} href="https://www.linkedin.com/in/zaynaib-ola-giwa/">LinkedIn</a>
        <a className={footerLinksPos} href="https://www.youtube.com/channel/UCCKgha-Y5wmJ2abaG9EusMA">Youtube</a>
      </footer>
        )
  }