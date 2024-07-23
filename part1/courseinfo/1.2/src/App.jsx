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
const PARTS = [{name: 'fundementals of react',excercise:10},
              {name: 'using props to pass data',excercise:7},
              {name:'State of a component' ,excercise:14}
              ]
return(

<div>
<Header course={course}/>
<Content
 name = {PARTS[0].name}
 excercise = {PARTS[0].excercise}
 name1 ={PARTS[1].name}
 excercise1 = {PARTS[1].excercise}
 name2 ={PARTS[2].name}
 excercise2 = {PARTS[2].excercise}
 
></Content>
<Total 
 
total = {PARTS[0].excercise + PARTS[1].excercise + PARTS[2].excercise}></Total>
</div>
)

}

export default App