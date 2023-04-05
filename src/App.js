import './App.css';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About/About';
import Home from './components/Home/Home';
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar/Navbar';



function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/about" element={<About />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
