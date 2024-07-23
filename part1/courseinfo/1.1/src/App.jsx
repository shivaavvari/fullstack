const Header =(props) =>
{

return (
  <div>
    <p>{props.course}</p>
  </div>
)
}

const Content =(props) =>
  {
  
  return (
    <div>
      <p>{props.part}  : {props.excercise} </p>
    </div>
  )
  }
  
  const Total =(props) =>
    {
    
    return (
      <div>
        <p>Total is {props.total}  </p>
      </div>
    )
    }
  


const App = () => {


const course = 'Half stack application development'
const part1=   'fundementals of react'
const excercises1   = 10
const part2= 'using props to pass data '
const excercises2 = 7
const part3= 'State of a component'
const excercises3 =14

return(

<div>
<Header course={course}/>
<Content part={part1} excercise={excercises1}></Content>
<Content part={part2} excercise={excercises2}></Content>
<Content part={part3} excercise={excercises3}></Content>
<Total total = {excercises1 + excercises2 +excercises3} />
</div>
)

}

export default App