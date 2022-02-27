//Author and button
import React from "react";

const QuoteBoxRight = ({author,toggleQuoteBox,color}) =>{
    return(
    <div className="right">
            <span style={{color: color}}> <i> {author} </i></span><br /> <br />
            <button style={{backgroundColor: color}} onClick={toggleQuoteBox}><i class="fas fa-chevron-right"></i></button>
        </div>
    )
}

export default QuoteBoxRight;