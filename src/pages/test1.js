import React from "react"
import Layout from "../components/main"
import "../style/mystyles.scss"


export default function Home() {
    return(
        <Layout>
        <body>
        <section class="section">
          <div class="container">
            <h1 class="title">
              Hello World
            </h1>
            <p class="subtitle">
              My first website with <strong>Bulma</strong>!
            </p>
          </div>
        </section>
        </body>
        </Layout>
    )
  }
  