import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import About from './components/About/About';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      
      <Navbar />
  
      <Router>
        <Routes>
          
          <Route path= '/home' element={<Home/>}/>
          <Route path= '/home' element={<Navigate replace to="/home" />} />
          <Route path = '/about' element = {<About/>}/>
          
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
