import React from "react";
import QuoteBoxRight from "./QuoteBoxRight";
import QuoteBoxLeft from "./QuoteBoxLeft";

const QuoteBox = ({phrase, author,toggleQuoteBox,color}) =>{
//Funcionalidad

//Visualización
// return (
//     <div className='card'>
//         <div className="left">
//             <i className="fas fa-quote-left quotes" style={{color: color}}></i>
//             <p style={{color: color}}>{phrase}</p> <br /> 
//         </div>
//         <div className="right">
//             <span style={{color: color}}> <i> {author} </i></span><br /> <br />
//             <button style={{backgroundColor: color}} onClick={toggleQuoteBox}><i class="fas fa-chevron-right"></i></button>
//         </div>
//     </div>
// )


return (
    <div className='card'>
        <QuoteBoxLeft phrase={phrase} color={color}></QuoteBoxLeft>
        <QuoteBoxRight author={author} color={color} toggleQuoteBox={toggleQuoteBox}></QuoteBoxRight>
    </div>
)

}
export default QuoteBox;
