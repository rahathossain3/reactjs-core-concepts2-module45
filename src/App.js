import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

// html body bellow---------------- 
function App() {

  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUsers>      </ExternalUsers>
    </div >
  );
}

// ------------api call function hear 
function ExternalUsers() {
  const [users, setUsers] = useState([]);

  // useEffect( ()=> {},[])
  useEffect(() => {
    fetch(' https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))

  }, [])

  return (
    <div>
      <h1>External User</h1>
      <p>{users.length}</p>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }

    </div >
  )
}

function User(props) {
  return (
    <div style={{ border: '2px solid red', margin: '20px' }}>
      <h3>Name: {props.name} </h3>
      <p>Email: {props.email}</p>
    </div>
  )
}

//-------------------------------
function Counter() {
  const [count, setCount] = useState(55);

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);
  // another way -------------
  // const increaseCount = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }


  return (
    <div>
      <h1>Count: {count} </h1>
      {/* ----------------onClick er function ke call korar dorkar nai, function name likhe e hoy---------------------- */}
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease </button>
    </div>
  )
}



// array object -----------
//   const products = [
//     { name: 'laptopoo', price: 475000 },
//     { name: 'phoneo', price: 75000 },
//     { name: 'Watcho', price: 33000 },
//     { name: 'Tableto', price: 5000 }
//   ]


//   return (
//     <div className="App">
//       {/* dynamic data  using array object */}
//       {
//         products.map(product => <Product name={product.name} price={product.price}></Product>)

//       }

//       {/* <Product name="laptop" price="47000"></Product>
//       <Product name="Phone" price="75000"></Product>
//       <Product name="Watch" price="3500"></Product> */}

//     </div >
//   );
// }



function Product(props) {
  return (
    <div className="product">
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price} </p>
    </div>
  )
}

export default App;
