import React from "react";
import quoteData from "../Quotes.js"
import Buttons from './Buttons.jsx'

function Quote(props) {
    const [randomQuote, setRandomQuote] = React.useState({
        quote: 'Dream big and dare to fail.', 
        author: 'Norman Vaughan'
    })

    function quoteToggle() {
        const randomNumber = Math.floor(Math.random() * quoteData.length)
        const randomQuote = quoteData[randomNumber]
        setRandomQuote({quote: randomQuote.quote, author: randomQuote.author})
        props.toggle()
    }
   
    return (
        <div id="quote-box" style={props.fontStyles}>
            <div className='quote-text'>
                <i className='fa fa-quote-left'></i>
                <span id="text">{randomQuote.quote}</span>
             </div>
            <div className="quote-author">
                 -  
                <span id='author'> {randomQuote.author}</span>
             </div>
             <Buttons tog={quoteToggle} styles={props.bgStyles}/>
        </div> 
    )
}

export default Quote