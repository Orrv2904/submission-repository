import React from 'react';
import ReactDOM from 'react-dom';
import Content from './content';

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  );
}

const Total = (props) => {
  return (
    <p>Total exercises: {props.total}</p>
  );
}

const App = () => {
  const course = 'Half Stack application development';
  const part1 = 'Fundaments of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;
  const totalExercises = exercises1 + exercises2 + exercises3;

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1} exercises1={exercises1}
        part2={part2} exercises2={exercises2}
        part3={part3} exercises3={exercises3}
      />
      <Total total={totalExercises} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
