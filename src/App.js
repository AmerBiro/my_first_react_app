import './App.css';

function App() {

  const title = "Amer"
  const age = 32
  const arr = [1,2,3,4,5]
  const person = {name: "Amer", age: 32}
  const link = "https://www.google.com/"
  
  return (
    <div className="App">
      <div className="content">
        <h1>
          App Component
        </h1>
        <p>{title} {age} </p>
        <p>{arr}</p>
        <a href={link}>Google</a>
      </div>
    </div>
  );
}

export default App;
