const Header =(props) =>
{

return (
  <div>
    <p>{props.course}</p>
  </div>
)
}

const Part =(props) =>
  {
  
  return (
    <div>
      <p> {props.name}  :  {props.excercise} </p>
    </div>
  )
  }

const Content = (props) =>
  {
  
  return (
    <div>
      <Part  name = {props.name} excercise ={props.excercise} > </Part>
      <Part  name = {props.name1} excercise ={props.excercise1} > </Part>
      <Part  name = {props.name2} excercise ={props.excercise2} > </Part>
     
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
const part1= {

  name :'Fundementals of react',
  excercises:10
}

const part2= {

  name :'Using Props to pass data ',
  excercises:7
}

const part3= {

  name :'State of a component',
  excercises:14
}


return(

<div>
<Header course={course}/>
<Content
 name = {part1.name}
 excercise = {part1.excercises}
 name1 ={part2.name}
 excercise1 = {part2.excercises}
 name2 ={part3.name}
 excercise2 = {part3.excercises}
 
></Content>
<Total 
 
total = {part1.excercises + part2.excercises + part3.excercises}></Total>
</div>
)

}

export default App