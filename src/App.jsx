import './App.css'
import React from 'react'
import MainContent from "./components/Maincontent/"
import Colors from './Colors.js'
function App() {
  const [randomColor, setRandomColor] = React.useState(Colors[1]);
  document.body.style.backgroundColor = randomColor

  function colorToggler() {
      const colorArray = Colors
      const randomNumber = Math.floor(Math.random() * colorArray.length)
      const randColor = colorArray[randomNumber]
      setRandomColor(randColor)
}
  return (
    <MainContent toggle={colorToggler} color={randomColor}/>
  )
}

export default App
