import styled from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar(props) {
  
  
  return (
    <div className={styled.headerWrapper}>
      <div className="container"> 
        <div className={styled.header}>
         <h3>{props.title}</h3>
          <ul>
          <li>
             <Link to="/create-article">Create Article</Link> 
            </li>
            <li>
             <Link to="/">Article Lists</Link> 
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
        </ul>  
        </div>
      </div>
    </div>
    );
}
  
export default Navbar