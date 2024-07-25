import { useState } from 'react'

const Button =({handleclick,text}) =>
(
  <button onClick={handleclick}> {text}</button>
)


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick= () => {
    setGood(good +1)
 }
 
 const handleNeutralClick= () => {
   setNeutral(neutral +1)

 }
 
 const handleBadClick= () => {
   setBad(bad +1) 
 }
 
  return (
    <div>
      <h1><p>give feedback</p></h1>
      <Button handleclick={handleGoodClick} text='good' />
      <Button handleclick={handleNeutralClick} text='neutral' />
      <Button handleclick={handleBadClick} text='bad' />
     
      <h1><p>Statistics</p></h1>

       <ul> good {good}</ul>
       <ul> neutral {neutral}</ul>
       <ul> bad {bad}</ul>
       
    </div>
  )
}

export default App
