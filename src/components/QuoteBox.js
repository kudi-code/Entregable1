import React from "react";

const QuoteBox = ({QuoteBox, phrase, author,toggleQuoteBox,color}) =>{
//Funcionalidad

//Visualización
return (
    <div className='card'>
        <div className="left">
            <i className="fas fa-quote-left quotes" style={{color: color}}></i>
            <p style={{color: color}}>{phrase}</p> <br /> 
        </div>
        <div className="right">
            <span style={{color: color}}> <i> {author} </i></span><br /> <br />
            <button style={{backgroundColor: color}} onClick={toggleQuoteBox}><i class="fas fa-chevron-right"></i></button>
        </div>
    </div>
)
}
export default QuoteBox;
