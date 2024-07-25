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
  const [all, setAll] =useState(0)
  const avg =  (good -bad)/(good+bad+neutral)
  const pos = (good)/(good+bad+neutral) *100 +'%'
  
  const handleGoodClick= () => {
    
    const updatedGood = good +1
    setGood(updatedGood)
    setAll(updatedGood +bad+neutral)
    
 }
 
 const handleNeutralClick= () => {
  const updatedNeutral = neutral +1
  setNeutral(updatedNeutral)
  setAll(good +bad+updatedNeutral)
   
 }
 
 const handleBadClick= () => {
   const updatedBad = bad+1
    
   setBad(updatedBad) 
   setAll(good +updatedBad+neutral)
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
       <ul> all {all}</ul>
       <ul> avg {avg} </ul>
       <ul> positive {pos} </ul>
        
    </div>
  )
}

export default App
