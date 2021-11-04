import * as React from "react"
import Layout from "../components/main"
import Vizlayout from "../components/dataVizLayout"

import "../style/mystyles.scss"
import Basketball from "../images/basketball.png"

export default function Viz() {
    return (
        <Layout>
            
  
        <div class="columns">
            <div class="column">
            <Vizlayout img ={Basketball} link="https://public.tableau.com/app/profile/zaynaib/viz/Basketball-injuries/Sheet1" title="Baketball Injuries" desc="Tableau Visualization of Injuries of Basketball Players in the NBA"> </Vizlayout>

            </div>

            <div class="column">
            <Vizlayout img ={Basketball} link="https://public.tableau.com/app/profile/zaynaib/viz/Basketball-injuries/Sheet1" title="Baketball Injuries" desc="Tableau Visualization of Injuries of Basketball Players in the NBA"> </Vizlayout>

            </div>
            
        </div>

      <div class="columns">

        <div class="column">
        <Vizlayout img ={Basketball} link="https://public.tableau.com/app/profile/zaynaib/viz/Basketball-injuries/Sheet1" title="Baketball Injuries" desc="Tableau Visualization of Injuries of Basketball Players in the NBA"> </Vizlayout>

        </div>

        <div class="column">
        <Vizlayout img ={Basketball} link="https://public.tableau.com/app/profile/zaynaib/viz/Basketball-injuries/Sheet1" title="Baketball Injuries" desc="Tableau Visualization of Injuries of Basketball Players in the NBA"> </Vizlayout>

        </div>
      
      </div>
  
      
          
        </Layout>
    )
  }