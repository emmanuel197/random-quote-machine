import React from 'react'
import Footer from './Footer.jsx'
import Quote from './Quote.jsx'
function MainContent(props) {
    const bgStyles = {backgroundColor: props.color}
    const fontStyles = {color: props.color}
    return (
        <div className='wrapper' style={bgStyles}>
            <Quote bgStyles={bgStyles}
                    fontStyles={fontStyles} 
                    toggle={props.toggle}
            />
            <Footer/>
        </div>
    )
}

export default MainContent