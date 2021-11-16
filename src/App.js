//import logo from './logo.svg';
import './Components/Style.css';
import Navbar from './Components/Navbar';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import {
  Routes,
  Route,
  
} from "react-router-dom";
function App() {
  return (
    <div className="con">
      <div className="con1">
      <Navbar/>
      <Routes>
       <Route path="/" element={<Signin/>}/>
       <Route path="/signup" element={<Signup/>}/>
      </Routes>
      </div>
      
      
      
    </div>
  );
}

export default App;
