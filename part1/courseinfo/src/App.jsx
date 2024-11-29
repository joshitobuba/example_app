const Header = (props) => {
  console.log("Props de Header: ", props)
  return (
    <h1>{props.course.name}</h1>
  )
}


const Part = (props) => {
  console.log("Props de Part: ", props)
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  )
}


const Content = (props) => {
  console.log("Props de Content: ", props)
  return (
    <div>
      <Part part={props.parts.parts[0].name} exercise={props.parts.parts[0].exercises}/>
      <Part part={props.parts.parts[1].name} exercise={props.parts.parts[1].exercises}/>
      <Part part={props.parts.parts[2].name} exercise={props.parts.parts[2].exercises}/>
    </div>
    /* <p>
      {props.part} {props.exercises}
    </p> */
  )
}

const Total = (props) => {
  console.log("Props de Total: ", props)
  return (
    <p>Number of exercises: {props.total.parts[0].exercises + props.total.parts[1].exercises + props.total.parts[2].exercises}</p>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course}/>
      <Content parts={course}/>
      <Total total={course}/>
    </div>
  )
}

export default App
