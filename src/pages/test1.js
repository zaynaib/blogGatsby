import React from "react"
import { Link } from "gatsby"
import Layout from "../components/main"
import "../style/mystyles.scss"
import {bodyContainer,
  footerLinksPos,
  powerpuffImg,
  coolCatsImg

} from "../style/layout.module.css"

import PowerPuff from "../images/powerpuff.png"



export default function Home() {
    return(
        <Layout>
        <body>
        <section class="section is-three-quarters ">
          <div className={bodyContainer}>
           <div class ="columns">
                <div class="column ">

                <img className={powerpuffImg} src={PowerPuff}/>

                
                </div>


                <div class="column is-two-thirds">
                <p>
                My name is Zaynaib Giwa but everyone calls me Ola.
                I am a <b>Data Analyst</b> who also enjoys learning about <b>web programming</b>.
                I currently reside in Chicago and work as a Teaching Assistant for a Data Science Bootcamp.
              </p>
      
               <h4> My skills include</h4>
      
              <p>
      
                  <b>Languages </b>:
              
                  Python, R, JavaScript, MySQL, HTML, CSS
              </p>
                 
              <p>
              <b>Frameworks </b>:
                   Flask, jQuery, Bootstrap, Node.js,Express, D3
              </p>
                <p>
                  <b>Libraries/Packages</b>: Pandas, BeautifulSoup, Tidyverse, Shiny <br></br>
                
              </p>
      
              <p>
                <b>Technologies</b>: Tableau<br></br>
            
               </p>
      
               <h4> My philosophy</h4>
      
              <p>
              I believe that everyone has a place in tech. It doesn’t matter your zip code or if you even have a degree.  In my spare time I try to contribute to the tech community.
              
              </p>



              <p>
              <b>How do I do this?</b>
              <ul>
                <li>Co-organizer of <a href="https://www.rladieschicago.org/">R-Ladies Chicago</a> - An organization that promotes gender diversity in the R community</li>
                <li>Teaching Assistant for <a href="https://hacking4justice.org/">Hacking 4 Justice</a> - An organization that provides free R training to anyone.</li>
                <li> <Link to="/blog/">Blogging</Link> about things that I learn.</li> 
                <li>Hanging out with CoolCats <br></br><img className={coolCatsImg} src="https://i.pinimg.com/736x/1c/6a/a4/1c6aa47e0e518b552e7be7ea08f761ed.jpg"/> 
                 <br></br> 
                A meetup group that helps people transition from coding bootcamp into their tech careers </li>
              </ul>        
            </p>
      
        
            
                </div>



        




               
           </div>
        
          </div>
        </section>
        </body>
        </Layout>
    )
  }
  