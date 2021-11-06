import * as React from "react"
import Layout from "../components/main"
import Vizlayout from "../components/dataVizLayout"

import "../style/mystyles.scss"
import Basketball from "../images/basketball.png"
import Customer from "../images/customers.png"

export default function Viz() {
    return (
        <Layout>
            
        <h1 className="title is-2">Data Visualizations</h1>

        <div class="columns">
            <div class="column">
            <Vizlayout img ={Basketball} link="https://public.tableau.com/app/profile/zaynaib/viz/Basketball-injuries/Sheet1" title="Baketball Injuries" desc="Tableau Visualization of Injuries of Basketball Players in the NBA"> </Vizlayout>

            </div>

            <div class="column">
            <Vizlayout img ={Customer} link="https://public.tableau.com/app/profile/zaynaib/viz/lesson7/Story1" title="UK Bank Customers" desc="Tableau Dashboard of Bank Customers in the UK"> </Vizlayout>

            </div>
            
        </div>

  
  
      
          
        </Layout>
    )
  }