import './App.css';
import {Router, Routes} from 'react-router-dom';
import {Home, About, Events, Contact} from "./pages";

function App() {
  return (
    <div>
      <Router>
        <Routes path="/" componenet={Home}/>
        <Routes path="/about" componenet={About}/>
        <Routes path="/event" componenet={Events}/>
        <Routes path="/contact" componenet={Contact}/>
      </Router>
      
    </div>
  );
}

export default App;
