import './Style.css'

import {
    Link
  } from "react-router-dom";

function Navbar() {
    return (
      <div className="">
        <button  className="btn btn-success btn1">
            <Link  to="/"> Sign in</Link>
           </button>
        <button className="btn btn-success btn1"><Link  to="/signup"> Sign Up</Link></button>
      </div>
    );
  }
  
  export default Navbar;