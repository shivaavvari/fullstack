import { useState } from 'react'

const Button =({handleclick,text}) =>
(
  <button onClick={handleclick}> {text}</button>
)


const StatisticLine=({text,value})=>
{
 return(
 <table><tbody><tr><td>{text}</td><td>{value}</td></tr></tbody></table> 
 )

}

const Statistics = ({good,bad,neutral}) =>
{

  const Avg = (good-bad)/(good+bad+neutral)
  const Positive =(good)/(good+bad+neutral) *100 +'%'
  
  if (good===0 &bad===0&neutral==0)
  {
    return(
      <h4>No feedback given</h4>
    )
  }
  
  
  return(
    <div>
      <h1>Statistics </h1>
      <StatisticLine text="good" value={good}></StatisticLine>
      <StatisticLine text="neutral" value={neutral}></StatisticLine>
      <StatisticLine text="bad" value={bad}></StatisticLine>
      <StatisticLine text="Avg" value={Avg}></StatisticLine>
      <StatisticLine text="Positive" value={Positive}></StatisticLine>
      
       </div>
  )}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] =useState(0)
  
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
       <Statistics good={good} bad ={bad} neutral={neutral} ></Statistics>
        
    </div>
  )
}

export default App
