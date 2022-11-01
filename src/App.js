import './App.css';
import Navbar from './_navbar/Navbar';
import Home from './_home/Home';

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home/>
      </div>
    </div>
  );
}

export default App;
