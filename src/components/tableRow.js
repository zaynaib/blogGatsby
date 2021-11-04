import React from "react"
import "../style/mystyles.scss"

export default function Row(props) {
    const isWebPage = props.isWebPage;
    if(isWebPage){

    return( 
        <tr>
            <td>
                {props.name} 
            </td>

            <td>
                {props.description} 
            </td>
            
            
            <td className="has-text-centered">
                    <a href={props.webpage}className="mx-1">visit</a>
                    <a href={props.github}>source</a>
            </td>

            <td>
                {props.skills}
            </td>
        </tr>
        
        )
    }
    else{

        return( 
            <tr>
            <td>
                {props.name} 
            </td>

            <td>
                {props.description} 
            </td>
            
            <td className="has-text-centered">
                    <a href={props.github}>source</a>
            </td>

            <td>
                {props.skills}
            </td>

            </tr>
            
            )

    }
}