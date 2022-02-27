import quotes from './quotes.json'
import QuoteBox from './components/QuoteBox';
import './App.css';
import { useState } from 'react';

function random(length){
  return Math.floor(Math.random() * length);
}
const colors = ["#845ec2", "#2c73d2", "#008f7a"]
let randomColor = colors[random(colors.length)]
document.body.style = `background: ${randomColor}` 


function App() {
  const [quote, setQuote] = useState(quotes[random(quotes.length)])

    const togglequote = () =>{ 
        randomColor = colors[random(colors.length)]
        setQuote(quotes[random(quotes.length)]);
        document.body.style = `background: ${randomColor}` 
        
        console.log(quote)
    }

  return (
    <div className="App">
      <QuoteBox toggleQuoteBox={togglequote} phrase={quote.quote} author={quote.author} color={randomColor} ></QuoteBox>
    </div>
  );
}

export default App;
