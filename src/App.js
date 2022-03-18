import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    { name: 'laptopoo', price: 475000 },
    { name: 'phoneo', price: 75000 },
    { name: 'Watcho', price: 33000 },
    { name: 'Tableto', price: 5000 }
  ]


  return (
    <div className="App">
      {/* dynamic data  using array object */}
      {
        products.map(product => <Product name={product.name} price={product.price}></Product>)

      }

      {/* <Product name="laptop" price="47000"></Product>
      <Product name="Phone" price="75000"></Product>
      <Product name="Watch" price="3500"></Product> */}

    </div >
  );
}

function Product(props) {
  return (
    <div className="product">
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price} </p>
    </div>
  )
}

export default App;
