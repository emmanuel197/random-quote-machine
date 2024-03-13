import React from "react"

function Buttons(props) {
    
    return (
        <div className="buttons">
            <a id="tweet-quote" href="https://twitter.com/eamokuandoh" target="_blank" title="Tweet this quote!" style={props.styles}><i className="fab fa-twitter"></i></a>
            <a id="tumblr-quote" href="https://www.instagram.com/TheKuandoh" target="_blank" title="Post this quote on instagram!" style={props.styles}><i className="fab fa-instagram"></i></a>
            <button id="new-quote" onClick={props.tog} style={props.styles}>New quote</button>
        </div>
    )
}

export default Buttons