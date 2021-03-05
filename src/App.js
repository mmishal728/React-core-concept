import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Counter></Counter>
        <Users></Users>
        <p>My First React Paragraph</p>

        <Person name="Shakib khan" nayeka="Bobli " ></Person>
          <Person name="Jashim " nayeka="shabana" ></Person>
            <Person name= "Rubel" nayeka="Mousumi"></Person>
            <Person name = "Bapparas" nayeka="seka Khai"></Person>
      </header>
    </div>
  );
}

function Person(props) {
  const PersonStyle = {
    border:'2px solid cyan',
    margin:'15px', 
    borderRadius:'10px',
    padding:'10px',
    width:'500px',
  }
  return(
  <div style= {PersonStyle}>
      <h2>{props.name}</h2>
      <h4>{props.nayeka}</h4>
  </div>
  )
  
};
function Counter() {
  const [count , setCount] = useState(10);
  const handleIncrease = () =>setCount(count +1);
  ;
  return(
    <div>
      <h1>Count: {count}</h1>
       <button onClick={ () =>{setCount(count -1)} } >Decrease</button>
      <button onClick={ () =>{setCount(count +1)} } >Increase</button>
    </div>
  )
  
}

function Users() {
  const [users, setUsers]= useState([]);
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(data=> setUsers(data))
  }, [])
  return(
    <div>
      <h1>Dynamic User :{users.length}</h1>
      <ul>
        {
          users.map(user =><li>{user.name}, </li>)
        }
      </ul>
    </div>
  )
  
}

export default App;
