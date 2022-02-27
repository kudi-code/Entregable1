//Quote icon and phrase
import React from "react";

const QuoteBoxLeft = ({color,phrase}) =>{
    return(
        <div className="left">
            <i className="fas fa-quote-left quotes" style={{color: color}}></i>
            <p style={{color: color}}>{phrase}</p> <br /> 
        </div> 
    )
}

export default QuoteBoxLeft;